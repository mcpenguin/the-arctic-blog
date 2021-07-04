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

const icons_dict = {
    html, css, js, mongodb, react, nodejs, 
    expressjs, python, mysql, java, joget, 
    pandas
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
}

export { icons_dict, icons_names_dict };
