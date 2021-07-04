// module to export tool icons as dict
import html from './html.png'
import css from './css.png'
import js from './js.png'
import mongodb from './mongodb.png'
import react from './react.png'
import nodejs from './nodejs.png'
import expressjs from './expressjs.png'
import python from './python.png'
import mysql from './mysql.png'
import java from './java.png'
import joget from './joget.png'
import pandas from './pandas.png'
import metabase from './metabase.svg'
import wordpress from './wordpress.png'
import tableau from './tableau.png'
import bluehost from './bluehost.png'

const icons_dict = {
    html, css, js, mongodb, react, nodejs, 
    expressjs, python, mysql, java, joget, 
    pandas, metabase, wordpress, tableau,
    bluehost
}

const icons_names_dict = {
    html: "HTML",
    css: "CSS",
    js: "JavaScript",
    mongodb: "MongoDB",
    react: "React",
    nodejs: "Node.js",
    expressjs: "Express.js",
    python: "Python",
    mysql: "MySQL",
    java: "Java",
    joget: "Joget DX",
    pandas: "Pandas",
    metabase: "Metabase",
    wordpress: "WordPress",
    tableau: "Tableau",
    bluehost: "Bluehost"
}

export { icons_dict, icons_names_dict };
