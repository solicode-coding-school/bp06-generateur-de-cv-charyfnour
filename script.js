class Resume {
    constructor() {
        this.personalInfo = {};
        this.education = [];
        this.experience = [];
    }

    setPersonalInfo(info) {
        this.personalInfo = info;
    }

    addEducation(entry) {
        this.education.push(entry);
    }

    addExperience(entry) {
        this.experience.push(entry);
    }

    }

    const form = document.getElementById('cvForm');
    const educationContainer = document.getElementById('educationContainer');
    const experienceContainer = document.getElementById('experienceContainer');
    const preview = document.getElementById('cvPreview');
    const downloadButton = document.getElementById('downloadPDF');
    const resume = new Resume();
    

    const addInputField = (container, placeholder) => {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = placeholder;
        container.appendChild(input);
    };
    
    
    document.getElementById('addEducation').addEventListener('click', () => {
        addInputField(educationContainer, 'École ou diplôme');
    });
    
    
    document.getElementById('addExperience').addEventListener('click', () => {
        addInputField(experienceContainer, 'Poste ou projet');
    });
    
   
