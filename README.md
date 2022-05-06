# Spellchecker
Spellchecking microservice

To start
- Create python virtual environment
  - More information on python's virtual environment here: [View Python Documentation](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/)
- Download files
  - spellchecker_UI.py
  - receive.txt
  - response.txt
  - Optional Example files: example_project.py or example_project.js
- Necessary packages should be downloaded in virtual environment, including:
  - pip install autocorrect: [learn more about the python autocorrect module here](https://github.com/filyp/autocorrect)
- activate virtual environment with **source env/bin/activate**
- run the UI file: **python3 spellchecker_UI.py**

Example Interactions
- Included are Example files for how a project in python or javascript can interact with this service
  - example_project.py
  - example_project.js
- To try out, house these files in the same directory as your UI and text files

To Interact

- Use the example project files
- Send text via receive.txt
- Receive spellchecked text via response.txt
