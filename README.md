# svg-iconset-skeleton
This is a boilerplate for start a new project of SVG iconset. The icons
stored in the **src** directory are cleaned, copied in the **dist** directory,
then bundled in the **sprite.svg** file at the root of the project.

*For a real optimization, you should still check the export settings of your vector graphics editor!*

## How to do ?
1- Open a Terminal;
2- Import the skeleton: `$ git clone git@github.com:vuzonp/svg-iconset-skeleton.git ./my-theme`;
3- Go to the project: `$ cd ./my-theme`;
4- Edit the settings in Gruntfile.js (optional);
5- Open *Inkscape/Illustrator*, create an awesome icon and save it to the *./src* folder.
6- Repeat the 5th step for each icon.
7- Create the sprite of your icons `$ npm run build`
8- Open the *./sprite-demo.html* file in a browser for watch the result !
