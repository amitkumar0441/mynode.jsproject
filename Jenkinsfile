pipeline {
    agent any
    stages {
        stage('stage1- clean the workspace') {
            steps {
                cleanWs()

            }
        }
        stage('stage2- clone the code') {
            steps {
                git branch: 'main', url: 'https://github.com/amitkumar0441/mynode.jsproject.git'
                
            }
        }
        stage('stage3- install node modules') {
            steps {
                sh 'npm install'
                
            }
        }
        stage('stage4- run the node application in background') {
            steps {
                sh 'nohup npm start &> npm.log &'
                
            }
        }
    }
}
