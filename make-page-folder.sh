#!/bin/bash
# Bash script to autogenerate page folder
# Usage: bash make-page-folder.sh <page name>
sectionName=$1;
# Create components folder
mkdir src/pages/${sectionName}/components;
# Make files for components
cd src/pages/${sectionName};
touch ${sectionName}.js ${sectionName}.css;
# Put "generic" lines into js file
printf "// React component class for ${sectionName} section
import React, { Component } from 'react';\n
// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';\n
// import stylesheet
import './${sectionName}.css';\n
export default class ${sectionName} extends Component {
    render() { 
        return (
            <>
            
            </>
        ); 
    }
}" >> ${sectionName}.js;