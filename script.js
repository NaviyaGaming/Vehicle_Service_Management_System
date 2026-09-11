// ===== Counter animations =====
function animateCounter(el, target) {
    const isFloat = target % 1 !== 0;
    const duration = 1800;
    const startTime = performance.now() + 400;
    
    function update(now) {
        if (now < startTime) {
            requestAnimationFrame(update);
            return;
        }
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = eased * target;
        el.textContent = isFloat ? value.toFixed(1) : Math.floor(value);
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = isFloat ? target.toFixed(1) : target;
    }
    requestAnimationFrame(update);
}

document.querySelectorAll('[data-counter]').forEach(el => {
    const target = parseFloat(el.dataset.counter);
    animateCounter(el, target);
});

// ===== Toast notifications =====
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
}

// ===== Password toggle =====
const passwordToggle = document.getElementById('password-toggle');
const passwordInput = document.getElementById('password');

passwordToggle.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    passwordToggle.querySelector('i').className = isPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
});

// ===== Form submission =====
const form = document.getElementById('login-form');
const signInBtn = document.getElementById('sign-in-btn');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    signInBtn.classList.add('loading');
    
    setTimeout(() => {
        signInBtn.classList.remove('loading');
        showToast(`Welcome back! Redirecting to dashboard…`, 'success');
        // Simulate redirect
        setTimeout(() => {
            // window.location.href = '/dashboard';
        }, 1200);
    }, 1600);
});

// ===== Google Sign-In =====
function handleCredentialResponse(response) {
    const token = response.credential;
    showToast('Google authentication successful', 'success');
    
    fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: token })
    })
    .then(res => res.json())
    .then(data => {
        window.location.href = "/dashboard";
    })
    .catch(error => {
        showToast('Authentication failed. Please try again.', 'error');
        console.error("Error verifying token:", error);
    });
}

// Initialize Google Identity Services when loaded
window.addEventListener('load', () => {
    const checkGoogle = setInterval(() => {
        if (window.google && window.google.accounts) {
            clearInterval(checkGoogle);
            google.accounts.id.initialize({
                client_id: '355473925120-mo8r0a90q5d6rdcc6of507vlpja8bhvl.apps.googleusercontent.com',
                callback: handleCredentialResponse,
                auto_select: false,
                cancel_on_tap_outside: true
            });
            
            document.getElementById('google-btn').addEventListener('click', () => {
                google.accounts.id.prompt();
            });
        }
    }, 200);
});

// Pre-fill email for demo
emailInput.value = ' ';