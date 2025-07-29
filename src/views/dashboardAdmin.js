//This is where the Admin Dashboard view goes.

//Function exported with the HTML structure of the Admin dashboard view.
export function showAdminView() {
    return `
    <main>
        <!-- Profile section for admin user -->
        <article class="profile-article">

            <!-- Profile picture, user name and role -->
            <div class="profile-info">
                <h2>Events</h2>
                <img id="img1" src="./public/images/image1.png" alt="Foto de Perfil">
                <h4 id="user-name"></h4>
                <p>Admin</p>
            </div>

            <!-- Navigation buttons -->
            <div class="nav-btns">
                <button class="button-nav" id="btn-events">Events</button>
                <button class="button-nav" id="logout">Logout</button>
            </div>
        </article>
    
        <!-- Section for managing events -->
        <section class="events-manager">

            <!-- Button to create a new event -->
            <button id="create-event">Add New Event</button>

            <table class="events-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Capacity</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Example event row -->
                    <tr>
                        <td id="td-img">
                            <img id="img2" src="./public/images/image2.jpg" alt="Salón de Evento">
                        </td>
                        <td>Aniversario</td>
                        <td>Celebración de aniversario número 20 de Mario y Julia.</td>
                        <td>30</td>
                        <td>18-Agust, 2025</td>
                        <td>
                            <div>
                                <button id="btn-edit">Edit</button>
                                <button id="btn-delete">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </main>
    `;
}
