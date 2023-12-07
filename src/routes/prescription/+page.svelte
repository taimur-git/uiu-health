
<style>
    .drug-input-container {
        margin-top: 20px;
    }
</style>


<div class="container">
    <h2 class="mt-4 mb-4">Prescription Page</h2>

    <!-- Patient Information -->
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="patientName">Patient Name</label>
            <input type="text" class="form-control" id="patientName" placeholder="Enter patient name">
        </div>
        <div class="form-group col-md-6">
            <label for="patientAge">Patient Age</label>
            <input type="text" class="form-control" id="patientAge" placeholder="Enter patient age">
        </div>
    </div>

    <!-- Prescription Date -->
    <div class="form-group">
        <label for="prescriptionDate">Prescription Date</label>
        <input type="date" class="form-control" id="prescriptionDate">
    </div>

    <!-- Drug Input Table -->
    <div class="drug-input-container">
        <h4>Medicine Information</h4>
        <table class="table">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Name of the Drug</th>
                    <th>Dosage</th>
                    <th>Frequency</th>
                    <th>Period</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody id="medicineTableBody">
                <!-- Table rows will be dynamically added here -->
            </tbody>
        </table>

        <!-- Add and Remove Drug Buttons -->
        <div class="form-group">
            <button class="btn btn-primary">Add Drug</button>
            <button class="btn btn-danger" >Remove Drug</button>
        </div>
    </div>

    <!-- Additional Instructions -->
    <div class="form-group">
        <label for="additionalInstructions">Additional Instructions</label>
        <textarea class="form-control" id="additionalInstructions" rows="3"></textarea>
    </div>

    <!-- Create Prescription Button -->
    <button class="btn btn-success" >Create Prescription</button>

</div>

<!-- 
<script>

import "https://code.jquery.com/jquery-3.5.1.slim.min.js";
import "https://cdn.jsdelivr.net/npm/@popperjs/core@2.0.7/dist/umd/popper.min.js"

import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"

import "https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"


    function addDrugRow() {
        var tableBody = document.getElementById("medicineTableBody");
        var newRow = tableBody.insertRow(tableBody.rows.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);

        cell1.innerHTML = '<input type="text" class="form-control" placeholder="Type">';
        cell2.innerHTML = '<input type="text" class="form-control" placeholder="Name of the Drug">';
        cell3.innerHTML = '<input type="text" class="form-control" placeholder="Dosage">';
        cell4.innerHTML = '<input type="text" class="form-control" placeholder="Frequency">';
        cell5.innerHTML = '<input type="text" class="form-control" placeholder="Period">';
        cell6.innerHTML = '<button class="btn btn-danger" onclick="removeRow(this)">Remove</button>';
    }

    function removeDrugRow() {
        var tableBody = document.getElementById("medicineTableBody");
        if (tableBody.rows.length > 0) {
            tableBody.deleteRow(tableBody.rows.length - 1);
        }
    }

    function removeRow(button) {
        var row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }

    function createPrescription() {
        // Add your logic to gather data and create the prescription
        alert('Prescription created successfully!');
    }
</script-->