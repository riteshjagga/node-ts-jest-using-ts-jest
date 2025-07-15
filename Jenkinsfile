pipeline {
    agent {
        docker {
            image 'node:20'      // official Node.js image from Docker Hub
        }
    }

    stages {
        stage('Checkout') {
          steps {
            checkout scm
          }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}
