let isTyping = false;

function sendMessage() {
    const input = document.getElementById("user-input");
    const userMessage = input.value.trim();

    if (userMessage === "" || isTyping) return;

    displayUserMessage(userMessage);
    input.value = "";

    // Show typing indicator
    showTypingIndicator();

    // Simulate processing delay
    setTimeout(() => {
        hideTypingIndicator();
        const botResponse = getBotResponse(userMessage);
        displayBotMessage(botResponse);
    }, 1000 + Math.random() * 1000);
}

function sendQuickMessage(message) {
    if (isTyping) return;

    // Hide the quick actions once a message is sent
    document.getElementById("quick-actions").style.display = "none";

    displayUserMessage(message);
    showTypingIndicator();

    setTimeout(() => {
        hideTypingIndicator();
        const botResponse = getBotResponse(message);
        displayBotMessage(botResponse);
    }, 800);
}


function displayUserMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.className = "message user-message";
    messageDiv.innerHTML = `<div class="user-bubble">${message}</div>`;
    chatBox.appendChild(messageDiv);
    scrollToBottom();
}

function displayBotMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.className = "message bot-message";
    messageDiv.innerHTML = `
        <div class="bot-avatar">🤖</div>
        <div class="bot-bubble">${message}</div>
      `;
    chatBox.appendChild(messageDiv);
    scrollToBottom();
}

function showTypingIndicator() {
    isTyping = true;
    const chatBox = document.getElementById("chat-box");
    const typingDiv = document.createElement("div");
    typingDiv.className = "message bot-message";
    typingDiv.id = "typing-indicator";
    typingDiv.innerHTML = `
        <div class="bot-avatar">🤖</div>
        <div class="bot-bubble">
          <div class="typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
          </div>
        </div>
      `;
    chatBox.appendChild(typingDiv);
    scrollToBottom();
}

function hideTypingIndicator() {
    isTyping = false;
    const typingIndicator = document.getElementById("typing-indicator");
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function scrollToBottom() {
    const chatBox = document.getElementById("chat-box");
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    const msg = input.toLowerCase();

    // Greetings
    if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey") || msg.includes("greetings") || msg.includes("good morning") || msg.includes("good afternoon") || msg.includes("good evening")) {
        return "Hi there! 👋 Welcome to Glamscrap Technologies. I'm your AI assistant, here to answer any questions about our products, services, or sustainability efforts. How can I help you today?";
    }

    // Services
    if (msg.includes("services") || msg.includes("what do you offer") || msg.includes("your work") || msg.includes("solutions") || msg.includes("what do you do") || msg.includes("recycling services")) {
        return "We offer complete waste management services including:<br><br>• E-waste recycling<br>• Plastic recycling<br>• Glass recovery<br>• Sustainable manufacturing<br>• Eco-friendly corporate gifting<br>• 3D printing with recycled materials<br>• PET bottle shredding<br>• Customized B2B solutions<br><br>Let me know which one you'd like to explore!";
    }

    // E-Waste
    if (msg.includes("e-waste") || msg.includes("electronic waste") || msg.includes("old electronics") || msg.includes("laptop disposal") || msg.includes("computer recycling")) {
        return "We handle e-waste safely and efficiently. Devices we recycle include:<br><br>• Computers & laptops<br>• Phones & tablets<br>• Circuit boards<br>• Cables & batteries<br><br>We extract reusable metals and safely dispose of hazardous components in compliance with environmental standards.";
    }

    // Contact Info
    if (msg.includes("contact") || msg.includes("how to reach") || msg.includes("address") || msg.includes("phone number") || msg.includes("email")) {
        return "📍 <strong>Address:</strong> SREC SPARK Incubation Center, Coimbatore<br>📞 <strong>Phone:</strong> +91 9363206709<br>📧 <strong>Email:</strong> glamscraptechnologies@gmail.com<br>🕒 <strong>Hours:</strong> Mon–Sat, 9 AM – 6 PM IST";
    }

    // Mission & Vision
    if (msg.includes("mission") || msg.includes("purpose") || msg.includes("why you exist")) {
        return "Our mission is to build a sustainable planet by transforming waste into valuable resources using advanced recycling technologies and responsible business practices.";
    }

    if (msg.includes("vision") || msg.includes("dream") || msg.includes("goal")) {
        return "Our vision is to be a global leader in waste transformation, where nothing goes to landfills and everything gets a second life. 🌍";
    }

    // Products
    if (msg.includes("products") || msg.includes("items you sell") || msg.includes("what do you make") || msg.includes("stationery") || msg.includes("seed pen") || msg.includes("notepad") || msg.includes("pencil") || msg.includes("bags") || msg.includes("gift") || msg.includes("trophies")) {
        return "We create eco-friendly products such as:<br><br>• Seed Pens & Seed Pencils<br>• Recycled Notepads<br>• Sustainable Bags<br>• Custom Trophies<br>• Plantable Corporate Gifts<br><br>Each product supports zero-waste living and promotes a greener lifestyle.";
    }

    // Technology & Innovation
    if (msg.includes("technology") || msg.includes("how it works") || msg.includes("process") || msg.includes("machines") || msg.includes("methods") || msg.includes("tools")) {
        return "We use cutting-edge tech like:<br><br>• AI-powered waste sorting<br>• Hydrometallurgy for metal extraction<br>• 3D printing with recycled plastics<br>• Eco-design in manufacturing<br><br>Innovation helps us recycle more, waste less.";
    }

    // Sustainability
    if (msg.includes("sustainable") || msg.includes("eco-friendly") || msg.includes("environment") || msg.includes("green") || msg.includes("climate") || msg.includes("carbon")) {
        return "We're 100% focused on sustainability. Here's how:<br><br>• Zero-waste production<br>• Carbon-conscious logistics<br>• Plant-based packaging<br>• Renewable energy use<br><br>Every step we take aims to reduce our environmental footprint.";
    }

    // Bulk orders / B2B
    if (msg.includes("bulk order") || msg.includes("b2b") || msg.includes("corporate") || msg.includes("wholesale") || msg.includes("white label") || msg.includes("bulk gifting")) {
        return "Yes! We support B2B partnerships and bulk orders with custom branding, white labeling, and scalable supply. Perfect for schools, events, NGOs, and businesses.";
    }

    // Pickup or logistics
    if (msg.includes("pickup") || msg.includes("collection") || msg.includes("logistics") || msg.includes("dispose") || msg.includes("drop") || msg.includes("delivery")) {
        return "We offer pickup and logistics services in the Coimbatore region for both small and large quantities of waste. Our vehicles are GPS-tracked and follow eco-compliant disposal processes.";
    }

    // Certifications
    if (msg.includes("certification") || msg.includes("legal") || msg.includes("license") || msg.includes("compliance") || msg.includes("regulation")) {
        return "We're fully certified and compliant with:<br><br>• ISO 14001 Environmental Management<br>• E-waste Authorization<br>• PCB (Pollution Control Board) Clearance<br>• Hazardous Waste Licenses";
    }

    // Pricing
    if (msg.includes("price") || msg.includes("cost") || msg.includes("quote") || msg.includes("estimate") || msg.includes("rate") || msg.includes("how much")) {
        return "Pricing depends on the type, volume, and processing complexity. We provide free consultations and customized quotes. Please call or email us for more.";
    }

    // Team / Leadership
    if (msg.includes("founder") || msg.includes("ceo") || msg.includes("team") || msg.includes("leadership") || msg.includes("who is behind") || msg.includes("staff")) {
        return "Glamscrap is led by passionate individuals committed to sustainability:<br><br>👩‍💼 Kayalvizhi S – CEO & Founder<br>🧑‍💼 Vimal V – Operations Manager<br><br>Our team blends engineering, design, and environmental science to make a real impact.";
    }

    // Testimonials / Success
    if (msg.includes("success") || msg.includes("achievements") || msg.includes("awards") || msg.includes("recognition")) {
        return "We’re proud recipients of the <strong>Social Impact Award – The Pitch @ Coimbatore Vizha 2024</strong>, recognized by the National Green Awards Council for our sustainable innovation and outreach. 🌟";
    }

    // Greetings / Thank you / Bye
    if (msg.includes("thank") || msg.includes("thanks") || msg.includes("great") || msg.includes("helpful")) {
        return "You're most welcome! 🙏 If you have any more questions, just ask. Sustainability starts with curiosity!";
    }

    if (msg.includes("bye") || msg.includes("goodbye") || msg.includes("see you") || msg.includes("take care")) {
        return "Thanks for visiting Glamscrap Technologies. 👋 Have a wonderful day and stay eco-conscious!";
    }

    // Fallback
    return "I'm here to help you learn more about Glamscrap Technologies. You can ask about our products, services, sustainability, or even place a bulk order. What would you like to explore?";
}


function toggleChatbot() {
    const chatContainer = document.getElementById("chat-container");
    const chatBox = document.getElementById("chat-box");

    const isVisible = chatContainer.style.display === "flex";
    chatContainer.style.display = isVisible ? "none" : "flex";

    if (!isVisible) {
        // Welcome message when chat opens
        setTimeout(() => {
            chatBox.innerHTML = `
            <div class="message bot-message">
              <div class="bot-avatar">🤖</div>
              <div class="bot-bubble">
                Welcome to Glamscrap Technologies! 🌱<br><br>
                I'm here to help you learn about our innovative recycling solutions and sustainable waste management services. 
                Feel free to ask questions or use the quick action buttons below!
              </div>
            </div>
          `;
        }, 100);
    }
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("user-input").addEventListener("keydown", function (event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    });
});