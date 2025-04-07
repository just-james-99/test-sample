## Technologies Used

**Frontend:**

* **React**: Version 18 or higher
* **Redux, Tailwind CSS, GSAP**
* **Node.js**: Version 20.x

## System Requirements

* **Docker**: Version 20.10 or higher
* **Docker Compose**: Version 2.0 or higher 

## Installation and Running the Application

To run this application, follow these simple steps:

1.  **Clone this repository (if you haven't already):**
    ```bash
    git clone https://github.com/just-james-99/test-sample
    cd test-sample
    ```

2.  **Ensure you are in the root directory of the project (where the `docker-compose.yml` file is located).**

3.  **Run the application using Docker Compose:**
    ```bash
    docker-compose up -d
    ```
    This command will download (if necessary) and start the containers defined in your `docker-compose.yml` file in detached mode (running in the background).

## Accessing the Application

Once the containers are running successfully, you can access the application in your web browser at **http://localhost:3000**.

## Stopping the Application

To stop the application and its associated containers, run the following command in the root directory of the project:

```bash
docker-compose down