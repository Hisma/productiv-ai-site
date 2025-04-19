---
title: "Create AI Dev Environment Part 1: Deploy Linux & Docker/Portainer"
description: "The very first step in our ‘Automate Everything’ series: stand‑up WSL 2 on Windows and deploy Portainer with Docker Compose to lay the foundation for every workflow that comes next."
---

If you're a beginner to linux and docker/microservices, this how-to is a great starting point.  This approach creates a clean canvas to deploy our AI tools in a modular and easily maintainable manner.  We'll get to the actual AI stuff soon.  


---

If you already have a linux workstation (bare metal or hypervisor-based VM), you can skip this step. If you're a Windows user, we'll deploy linux via WSL2.

## Why WSL 2?

* Native‑speed Linux kernel on Windows  
* Shared file system with Windows (`\\wsl$`) - no clunky dual‑boot  
* Perfect runtime for Docker without Virtual Machine overhead

> **note:** WSL 2 needs **Windows 10 21H2+** or **Windows 11**.

---

## Step 1 — Install WSL 2 + Ubuntu

1. Open **PowerShell as Administrator** and run the single command:

   ```powershell
   wsl --install
   ```

   This:
   * enables all pre-requiste *Windows Subsystem for Linux* features 
   * downloads latest Ubuntu LTS (as of now version 24.04)
   * sets Ubuntu LTS as the default WSL 2 version

2. After Ubuntu is installed, launch the app and create your Linux username/password.


---

## Step 2 — Install Docker inside WSL 2

We're going to deploy the latest version of docker and use portainer as our container orchestrator and front-end.

```bash
# inside the Ubuntu shell
sudo apt update
sudo apt install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg \
    sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) \
  signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo usermod -aG docker $USER && newgrp docker
```

---

## Step 3 — Deploy Portainer with Docker Compose

Portainer gives us a browser dashboard to **launch / monitor / troubleshoot** containers and stacks.

We'll be using the stacks feature to organize and manage our containers in later lessons.  For now, let's just get portainer running.

1. Create 2 new folders - a docker folder for our docker-compose file, & a portainer folder to mount portainer data to our host:

   ```bash
   mkdir -p ~/docker/portainer
   ```

2. Add a `docker-compose.yml`:

Inside the `docker` directory,  create a new file with the command `nano docker-compose.yml`.
Add the following contents - 

   ```yaml
   services:
     portainer:
       image: portainer/portainer-ce:latest
       container_name: portainer
       restart: always
       ports:
         - "8000:8000"   # Edge agent (optional)
         - "9443:9443"   # HTTPS UI/API
       volumes:
         - /var/run/docker.sock:/var/run/docker.sock
         - ~/docker/portainer:/data
   ```
 ctrl + x to exit the nano editor & Y to save our new file changes.
* going forward, I'll assume you know how to make and edit files in linux.

3. Launch it:

   ```bash
   docker compose up -d
   docker ps
   ```

You should see the `portainer/portainer-ce:latest` image listed with a `up` status. 

4. Open **https://localhost:9443** (enter an admin password on first run).

After setting a password, you're greeted with the portainer dashboard. Click "containers" to see the status of your newly created container.

Great, now we've created the canvas for our AI productivity environment.  

---

## What’s next?

Part 2 will show you how to:

* spin up **LLM API** using docker containers (Ollama + OpenWebUI) inside WSL 2, 
* Install **VS Code-Server** with AI-enhanced coding extensions for coding-specific tasks, and
* manage it visually through Portainer Stacks.

See you in the next “How‑To”. Until then, explore Portainer—click **Stacks → Add stack** and you’ll glimpse how we’ll ship each workflow as a reproducible compose file. 

---

### Quick recap

| We did | Why it matters |
|---------|----------------|
| Installed WSL 2 | Performant Linux Dev Environment Integrated with Windows |
| Installed Docker Engine | Containerization Backbone |
| Deployed Portainer | Visual Docker Container Management & Orchestration |

