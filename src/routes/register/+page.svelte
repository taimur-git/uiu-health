<script lang=ts>
    import { redirect } from "@sveltejs/kit";
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import type { document } from "postcss";
  let value:number =0 ;
  let basicInfo = {
    username: '',
    email: '',
    password: '',
    phone: '',
    studentId: '',
  };
  
  const handleSignup = async (e: Event) => { 
    e.preventDefault();
    extractStudentID();
    
    const res = await fetch('/api/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(basicInfo)
    });

    try{
      const data = await res.json();
      console.log(data);
      if (data.message === 'User created') {
        goto('/login');
      }
    } catch (err) {
      console.log(err);
    }
  }
  
  function takeToLandingPg() {
    goto('/');
  }

  function extractStudentID(){
    //grab the ID from the email using regex?
    //example: trahman2016@uiu -> 2016
    const match = basicInfo.email.match(/(\d+)/);
    if (match) {
        basicInfo.studentId = match[0];
    }
    basicInfo.studentId = match ? match[0] : '';

  }
</script>
<div class="flex justify-center">
    <div class="w-full sm:w-3/5 md:w-1/3 ">
        <h1 class="text-2xl font-bold mb-2.5">Register</h1>
        <h1 class="text-lg font-normal mb-4">Enter your credentials to login.</h1>
        <form method="POST" class="form">

            <label class="label">
                <span class="text-black">Basic Info</span>
                <input 
                class="input variant-form-material"
                type="text"  bind:value={basicInfo.username} name='username' placeholder="Enter user name..." required />
            </label>
            <input class="input variant-form-material" bind:value={basicInfo.phone} type="text" name="phone" placeholder="Enter your phone number">
            <input class="input variant-form-material" bind:value={basicInfo.email} type="text" name="email" placeholder="Enter your email">
            <!--input type="hidden" name="studentId" bind:value={basicInfo.studentId}-->
            
            <label class="label">
                <span class="text-black">Password</span>
                <input 
                bind:value={basicInfo.password}
                required
                name="password"
                type="password"
                placeholder="Enter password..."
                class="input variant-form-material"
                />
            </label>

            
            <button  on:click={handleSignup} class="btn btn-sm variant-filled-secondary" type="submit">Register</button>
        </form>

        <p>Already have an account? <a href="/login">Login</a></p>

    </div>
</div>

<style>
    .form{
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: #fff;
        box-shadow: 0 0 0.5rem rgba(0,0,0,0.1);
    }
    
    .form button{
        margin-top: 1rem;
    }
</style>