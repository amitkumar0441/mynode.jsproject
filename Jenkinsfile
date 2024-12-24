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
        stage('stage3- run the application') {
            steps {
                sh '''
                nohup npm start > output.log 2>&1 &
                echo "Node.js app started in background"
                '''
                
            }
        }
    }
}
