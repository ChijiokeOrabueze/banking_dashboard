# openpay
Openpay is a banking dashboard (mini) project built with vite, reactjs, typescript and docker. The project follows a typical "components-templates-pages" folder structure () that allows for easy scaling and contributions. 

Each page (defined within the src/pages folder) is built atop global components, defined in the src/components folder, and local components and templates defined in {pageName}/components and {pageName}/templates folders respectively.

The application uses: the react context api () for managing navigation to different pages from the single single side bar, styled-components () for scalable and manageable styling and react apex charts library for making customized plots rendered on the browser.

## Deployment
This project was hosted using github pages and can be found at "https://chijiokeorabueze.github.io/banking_dashboard/".


## Running the application (locally)
There are basically two ways to get this application running on your local machine.
- The first is using a container (docker). This is the recommended method since it allows you to freely run the application with less dependencies. To use this method simple run the command "docker-compose up" at the root directory of the application. 
PS: This method requires a total of 2 dependencies, docker and docker-compose, which must be installed globally on your local machine before starting the application.


- The second method is the "unconainerized" method. The following steps outlines how to use this method.
1. clone the repository to your local machine.
2. Run the command "yarn" or "yarn install" to install all dependencies of the application.3. Run the command "yarn dev" on a terminal opened at the root directory of this project. P
PS: This method requires that, nodejs and the yarn package manager is installed locally on your local computer.

Regardless of the method utilized, the application will be served on "http:localhost:5173" on your local browser.
PS: Check that port 5173 is not occupied at the time of starting the application since the application is served on this port.