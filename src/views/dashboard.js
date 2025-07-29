//This is where the Admin Dashboard view goes.
import { api } from "../js/api";
import { router } from '../router.js';

//Function exported with the HTML structure of the dashboard view.
export function dashboardView() {
    document.getElementById('app').innerHTML = `
    <main>
        <!--Dashboard header-->
        <header class="dashboard-header">
            <h1>FinanzasPRO</h1>
            <!--Navigation bar with links to different sections of the dashboard-->
            <nav>
                <ul>
                    <li><a href="#" class="link" data-link>Balance</a></li>
                    <li><a href="#/dashboardCategory" class="link" data-link>Category</a></li>
                    <li><a href="#/dashboardReports" class="link" data-link>Reports</a></li>
                    <li><button id="btn-logout">Log Out</button></li>
                </ul>
            </nav>
        <header>

        <!--Balance section--!>
        <section id="#" class="balance-section">

            <!--Balance card--!>
            <article class="balance-article">
                <h2>Balance</h2>
                <p>Ganancias<p>
                <p><p>
                <p>Gastos<p>
                <p><p>
                <h4>Total</h4>
            </article>

            <!--Filters card--!>
            <article class="filters-article">
                <h2>Filters</h2>
                <a href="#/dashboard" class="link" data-link>Mostrar filtros</a>
                <div class=hidden-filters>
                    <label for="types">Types:</label>
                    <select id="types">
                        <option value="all">All</option>
                        <option value="expense">Expenses</option>
                        <option value="earning">Earnings</option>
                    </select>

                    <label for="category">Categories</label>
                    <select id="category">
                        <option value="all">All</option>
                        <option value="food">Food</option>
                        <option value="services">Services</option>
                        <option value="outlets">Outlets</option>
                        <option value="education">Education</option>
                        <option value="transport">Transport</option>
                        <option value="job">Job</option>
                    </select>

                    <label for="date">Date</label>
                    <input type="date" id="date" name="date" required>

                    <label for="search">Sort by</label>
                    <select id="search">
                        <option value="date">Most recent</option>
                        <option value="date">Less recent</option>
                        <option value="number">Largest Amount</option>
                        <option value="number">Lesser Amount</option>
                        <option value="text">A/Z</option>
                        <option value="text">Z/A</option>
                    </select>
                </div>
            </article>
        </section>
    </main>
    `;
    document.getElementById('btn-logout').onclick = (e) => {
        e.preventDefault();
        auth.logout(); //Call the logout function from auth.js
        location.hash = '#/login'; //Redirect to login page
        router(); //Call the router to update the view
    }
}


//Exported function to show, delete and edit operations.
export async function showOperations() {
    const operationsList = await api.get('/operations'); //Fetch operations from the API to get operations data.

    //HTML structure for the operations view.
    document.getElementById('app').innerHTML = `
    <!--Operations section--!>
    <article class="operations-article">
        <h2>Operations</h2>
        <button id="btn-add-operation">+ New Operation</button> <!--Button to create a new operation--!>

        <!--Container for the operations list--!>
        <div class="hidden-operations-list">
            <table class="operations-table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>${operationsList.map(o => `
                        <td>${o.description}</td>
                        <td>${o.amount}</td>
                        <td>${o.type}</td>
                        <td>${o.category}</td>
                        <td>${o.date}</td>
                        <td> <!--Buttons for editing and deleting operations--!>
                            <button id="btn-edit-operation">Edit</button>
                            <button id="btn-delete-operation">Delete</button>
                        </td>` )}
                    </tr>
                </tbody>
            </table>
        </div>

    </article>
    `;
    //Add button function.
    document.getElementById('btn-add-operation').onclick = (e) => {
        e.preventDefault();
        createOperation(); //Call the function to create a new operation.
    };

    //variable to hold the operation ID for editing.
    const operationId = operationsList[0].id; //Assuming the first operation is selected for editing.
    const operation = operationsList.find(op => op.id === operationId); //Find the operation

    //Edit operation button function.
    document.getElementById('btn-edit-operation').onclick = (e) => {
        e.preventDefault();
        document.getElementById('app').innerHTML = `
            <h2>Edit Operation</h2>
            <form id="edit-operation-form">
                <label for="description">Description:</label>
                <input type="text" id="description" name="description" value="${operation.description}" required>

                <label for="amount">Amount:</label>
                <input type="number" id="amount" name="amount" value="${operation.amount}" required>

                <label for="type">Type:</label>
                <select id="type" name="type" value="${operation.type}" required>
                    <option value="expense">Expense</option>
                    <option value="earning">Earning</option>
                </select>

                <label for="category">Category:</label>
                <select id="category" name="category" value="${operation.category}" required>
                    <option value="food">Food</option>
                    <option value="services">Services</option>
                    <option value="outlets">Outlets</option>
                    <option value="education">Education</option>
                    <option value="transport">Transport</option>
                    <option value="job">Job</option>
                </select>

                <label for="date">Date:</label>
                <input type="date" id="date" name="date" value="${operation.date}" required>

                <button type="button" id="btn-cancel-operation">Cancel</button>
                <button type="submit" id="btn-edit-operation">Add</button>
            </form>
        `;

        document.getElementById('edit-operation-form').onsubmit = async e => {
            e.preventDefault();
            const updatedOperation = {
                description: e.target.description.value,
                amount: parseFloat(e.target.amount.value),
                type: e.target.type.value,
                category: e.target.category.value,
                date: e.target.date.value
            };
            await api.put(`operations/${operationId}`, updatedOperation);
        }

        //Function to handle the cancel button.
        document.getElementById('btn-delete-operation').onclick = async (e) => {
            e.preventDefault();
            await api.delete(`operations/${operationId}`);
            alert('Operation deleted successfully!');
            showOperations(); // Refresh the operations list
        };

    }

}

//Function to create a new operation.
export function createOperation() {
    document.getElementById('app').innerHTML = `
    <article class="create-operation-article">
        <h2>New Operation</h2>
        <form id="create-operation-form">
            <label for="description">Description:</label>
            <input type="text" id="description" name="description" required>

            <label for="amount">Amount:</label>
            <input type="number" id="amount" name="amount" required>

            <label for="type">Type:</label>
            <select id="type" name="type" required>
                <option value="expense">Expense</option>
                <option value="earning">Earning</option>
            </select>

            <label for="category">Category:</label>
            <select id="category" name="category" required>
                <option value="food">Food</option>
                <option value="services">Services</option>
                <option value="outlets">Outlets</option>
                <option value="education">Education</option>
                <option value="transport">Transport</option>
                <option value="job">Job</option>
            </select>

            <label for="date">Date:</label>
            <input type="date" id="date" name="date" required>

            <button type="button" id="btn-cancel-operation">Cancel</button>
            <button type="submit" id="btn-create-operation">Add</button>
        </form>
    </article>
    `;
    
    document.getElementById('create-operation-form').onsubmit = async e => {
        e.preventDefault();

        const operationData = {
            description: e.target.description.value,
            amount: parseFloat(e.target.amount.value),
            type: e.target.type.value,
            category: e.target.category.value,
            date: e.target.date.value
        };

        await api.post('operations', operationData); //Post the new operation to the API.
        alert('Operation created successfully!');
        showOperations(); // Refresh the operations list
    };
}
