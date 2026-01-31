/**
 * MOBILE TYRE EXPERTS - SHELLY-STYLE REMOTE FUNNEL (V2)
 * Color: #FF5E00 (Orange) & White
 * Method: Remote Script Injection
 * Features: Social Proof, Scroll Popup, Bottom-Left Chat, Exit Quiz
 * API Key: 74b4ff04-d5b4-44fb-a94f-404472bde5e1
 */

(function () {
    const K = "74b4ff04-d5b4-44fb-a94f-404472bde5e1";
    const PRIMARY_COLOR = "#FF5E00";
    const DARK_NAVY = "#001A33";
    const LOGO_URL = "/logo-for-header-small.png"; // Live from your root directory
    const COOKIE_NAME = "mte_funnel_v4";

    // CSS INJECTION
    const style = document.createElement('style');
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        #mte-system {
            --mte-orange: ${PRIMARY_COLOR};
            --mte-orange-light: #ff7e33;
            --mte-dark: ${DARK_NAVY};
            --mte-gray: #64748b;
            --mte-bg: #ffffff;
            --mte-border: #e2e8f0;
            font-family: 'Poppins', sans-serif !important;
        }

        #mte-system * { box-sizing: border-box !important; }

        .mte-off { display: none !important; opacity: 0 !important; pointer-events: none !important; }

        body.mte-no-scroll { overflow: hidden !important; position: fixed !important; width: 100% !important; }

        /* NOTIFICATION - PREMIUM DARK */
        .mte-notif {
            position: fixed !important; bottom: 30px !important; right: 30px !important;
            background: var(--mte-dark) !important; padding: 12px 24px !important; border-radius: 12px !important;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4) !important;
            display: flex !important; align-items: center !important; gap: 15px !important; z-index: 999999 !important;
            border-bottom: 3px solid var(--mte-orange) !important; animation: mteSlideIn 0.6s cubic-bezier(0.23, 1, 0.32, 1) !important;
            color: #fff !important; min-width: 320px; border: 1px solid rgba(255,255,255,0.1);
        }
        .mte-live { background: #ef4444; color: #fff; font-size: 8px; font-weight: 800; padding: 2px 6px; border-radius: 4px; }
        .mte-notif p { margin: 0; font-size: 13px; font-weight: 500; color: #f1f5f9; line-height: 1.4; }

        /* OVERLAY */
        .mte-overlay {
            position: fixed !important; inset: 0 !important; background: rgba(0, 26, 51, 0.8) !important;
            backdrop-filter: blur(8px) !important; z-index: 1000000 !important;
            display: flex !important; align-items: center; justify-content: center;
            animation: mteFadeIn 0.3s !important; overflow-y: auto !important;
        }

        /* POPUP MODAL - REDUCED HEIGHT */
        .mte-modal {
            background: #fff !important; width: 95% !important; max-width: 480px !important;
            border-radius: 20px !important; padding: 25px 35px !important; position: relative !important;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25) !important;
            animation: mtePopIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important; margin: 10px !important;
        }

        .mte-close {
            position: absolute !important; top: 15px !important; right: 15px !important;
            width: 34px !important; height: 34px !important; border-radius: 50% !important;
            background: #f1f5f9 !important; border: none !important; cursor: pointer !important;
            color: var(--mte-gray) !important; font-size: 22px !important; z-index: 10 !important;
            display: flex !important; align-items: center !important; justify-content: center;
            transition: 0.2s !important; line-height: 1 !important;
        }
        .mte-close:hover { background: var(--mte-orange) !important; color: #fff !important; transform: rotate(90deg) !important; }

        .mte-head { text-align: center; margin-bottom: 20px; display: flex !important; flex-direction: column !important; align-items: center !important; }
        .mte-head img { height: 45px; margin-bottom: 12px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1)); display: block !important; margin-left: auto !important; margin-right: auto !important; }
        .mte-head h2 { margin: 0; color: var(--mte-dark); font-size: 22px; font-weight: 700; line-height: 1.2; text-align: center; }
        .mte-head p { margin: 5px 0 0; color: var(--mte-gray); font-size: 13px; text-align: center; }

        .mte-field { display: flex !important; flex-direction: column !important; margin-bottom: 15px; text-align: left; }
        .mte-field label { display: block !important; font-size: 10px !important; font-weight: 700; color: var(--mte-dark) !important; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px; }
        .mte-field input, .mte-field textarea {
            width: 100% !important; border: 2px solid #f1f5f9 !important; border-radius: 12px !important;
            padding: 14px 18px !important; font-size: 14px !important; background: #f8fafc !important;
            outline: none !important; transition: all 0.2s !important; font-family: inherit; color: var(--mte-dark);
        }
        .mte-field input:focus, .mte-field textarea:focus { border-color: var(--mte-orange) !important; background: #fff !important; box-shadow: 0 0 0 4px rgba(255, 94, 0, 0.1) !important; }

        .mte-submit {
            width: 100% !important; background: var(--mte-orange) !important;
            color: #fff !important; border: none !important; padding: 16px !important;
            border-radius: 50px !important; font-size: 16px !important; font-weight: 600 !important;
            cursor: pointer !important; margin-top: 10px !important;
            box-shadow: 0 8px 25px rgba(255, 94, 0, 0.3) !important; transition: 0.3s !important;
        }
        .mte-submit:hover { transform: translateY(-3px) !important; box-shadow: 0 12px 30px rgba(255, 94, 0, 0.4) !important; }

        /* CHAT WIDGET - STABILITY FIX */
        .mte-chat {
            position: fixed !important; bottom: 20px !important; left: 20px !important;
            width: 380px !important; height: 500px !important; background: #fff !important; border-radius: 20px !important;
            z-index: 1000001 !important; box-shadow: 0 10px 40px rgba(0,0,0,0.2) !important;
            overflow: hidden !important; display: flex !important; flex-direction: column !important;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important; border: 1px solid rgba(0,0,0,0.05);
            opacity: 1 !important; visibility: visible !important;
        }
        
        /* Centering Fix for Minimized State */
        .mte-chat.mte-minimized { 
            width: 65px !important; height: 65px !important; border-radius: 50% !important; 
            border: 4px solid #fff !important; background: var(--mte-orange) !important; 
            cursor: pointer !important; justify-content: center !important; align-items: center !important;
            box-shadow: 0 8px 25px rgba(255, 94, 0, 0.4) !important;
        }
        .mte-chat.mte-minimized .mte-chat-header { background: transparent !important; padding: 0 !important; border: none !important; width: 100% !important; height: 100% !important; display: flex !important; align-items: center !important; justify-content: center !important; }
        .mte-chat.mte-minimized .mte-agent { gap: 0 !important; justify-content: center !important; width: 100% !important; display: flex !important; align-items: center !important; }
        .mte-chat.mte-minimized .mte-avatar { width: 40px !important; height: 40px !important; font-size: 32px !important; background: none !important; border: none !important; padding: 0 !important; margin: 0 !important; display: flex !important; align-items: center !important; justify-content: center !important; }
        .mte-chat.mte-minimized .mte-info, .mte-chat.mte-minimized .mte-close-chat-btn, .mte-chat.mte-minimized .mte-messages, .mte-chat.mte-minimized .mte-chat-footer { display: none !important; }
        .mte-chat.mte-minimized .mte-online { border-color: var(--mte-orange) !important; }

        .mte-chat-header { background: var(--mte-dark) !important; padding: 16px 20px !important; color: #fff !important; display: flex !important; align-items: center !important; justify-content: space-between !important; cursor: pointer; border-bottom: 2px solid var(--mte-orange); height: 75px !important; flex-shrink: 0 !important; }
        .mte-agent { display: flex !important; align-items: center !important; gap: 12px !important; flex: 1 !important; }
        .mte-avatar { position: relative !important; width: 44px; height: 44px; background: rgba(255,255,255,0.1); border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; font-size: 24px; flex-shrink: 0; }
        .mte-online { position: absolute !important; bottom: -2px; right: -2px; width: 12px; height: 12px; background: #10b981; border: 2px solid var(--mte-dark); border-radius: 50%; }
        
        .mte-info { display: flex !important; flex-direction: column !important; text-align: left !important; }
        .mte-info strong { font-size: 14px !important; font-weight: 700 !important; color: #fff !important; line-height: 1.2 !important; }
        .mte-info span { font-size: 11px !important; color: rgba(255,255,255,0.7) !important; line-height: 1 !important; margin-top: 2px; }
        
        .mte-close-chat-btn { background: rgba(255,255,255,0.1) !important; border: none !important; color: #fff !important; font-size: 24px !important; cursor: pointer; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; line-height: 1; transition: 0.2s; }
        .mte-close-chat-btn:hover { background: var(--mte-orange) !important; }

        .mte-messages { flex: 1 !important; padding: 20px !important; overflow-y: auto !important; background: #fdfcfb !important; display: flex; flex-direction: column; gap: 12px; }
        .mte-msg { padding: 12px 16px !important; border-radius: 18px !important; font-size: 14px; max-width: 85% !important; line-height: 1.5; animation: mteFadeUp 0.3s !important; }
        .mte-bot { background: #fff !important; border: 1px solid #e2e8f0 !important; align-self: flex-start !important; color: var(--mte-dark); box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .mte-user { background: var(--mte-orange) !important; color: #fff !important; align-self: flex-end !important; }
        
        .mte-option { display: block; width: 100%; border: 2px solid var(--mte-orange); color: var(--mte-orange); background: #fff; padding: 12px 16px; border-radius: 12px; margin-top: 8px; cursor: pointer; text-align: left; font-size: 13px; font-weight: 600; transition: 0.2s; }
        .mte-option:hover { background: var(--mte-orange); color: #fff; transform: translateX(4px); }

        .mte-chat-footer { padding: 15px; background: #fff; border-top: 1px solid #eee; display: flex; gap: 8px; align-items: center; height: 70px !important; flex-shrink: 0 !important; }
        .mte-chat-footer input { flex: 1; border: 2px solid #f1f5f9; padding: 10px 15px; background: #f8fafc; border-radius: 25px; font-size: 14px; outline: none; }
        .mte-chat-footer button { width: 40px; height: 40px; background: var(--mte-orange); border: none; border-radius: 50%; color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 16px; }

        /* EXIT QUIZ */
        .mte-quiz { background: #fff !important; width: 95% !important; max-width: 450px !important; border-radius: 28px !important; padding: 40px !important; position: relative !important; text-align: center; box-shadow: 0 30px 60px rgba(0,0,0,0.25) !important; }
        .mte-choices { display: flex; flex-direction: column; gap: 10px; margin-top: 20px; }
        .mte-choices button { width: 100%; padding: 14px; border: 2px solid #f1f5f9; background: #f8fafc; border-radius: 14px; color: var(--mte-dark); font-size: 14px; font-weight: 600; cursor: pointer; transition: 0.2s; }
        .mte-choices button:hover { border-color: var(--mte-orange); background: #fff; transform: translateY(-2px); color: var(--mte-orange); }

        /* ANIMATIONS */
        @keyframes mteSlideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes mteFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes mtePopIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes mteFadeUp { from { transform: translateY(15px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

        @media (max-width: 768px) {
            .mte-notif { display: none !important; }
            .mte-modal, .mte-quiz { padding: 30px 25px !important; }
            .mte-chat { width: calc(100% - 40px) !important; left: 20px !important; height: 80vh !important; }
            .mte-chat.mte-minimized { left: auto !important; right: 20px !important; width: 65px !important; height: 65px !important; }
        }
    `;
    document.head.appendChild(style);

    // HTML INJECTION
    const root = document.createElement('div');
    root.id = "mte-system";
    root.innerHTML = `
        <div id="mte-notif" class="mte-notif mte-off">
            <div class="mte-live">LIVE</div>
            <p>15+ Breakdown requests handled today.</p>
        </div>

        <div id="mte-overlay" class="mte-overlay mte-off">
            <div class="mte-modal">
                <button class="mte-close" onclick="mte.close()">&times;</button>
                <div class="mte-head">
                    <img src="${LOGO_URL}" alt="Mobile Tyre Experts">
                    <h2>Emergency Mobile Tyre Fix</h2>
                    <p>Flat tyre? Nut issues? We're on the way.</p>
                </div>
                <form onsubmit="mte.submit(event)">
                    <div class="mte-field">
                        <label>FULL NAME</label>
                        <input type="text" name="name" required placeholder="John Doe">
                    </div>
                    <div class="mte-field">
                        <label>PHONE NUMBER (WHATSAPP)</label>
                        <input type="tel" name="phone" required placeholder="Enter mobile number">
                    </div>
                    <div class="mte-field">
                        <label>URGENT MESSAGE / LOCATION</label>
                        <textarea name="message" required placeholder="Where are you and what happened?" rows="3"></textarea>
                    </div>
                    <button type="submit" class="mte-submit">Request Instant Help</button>
                    <div id="mte-form-msg"></div>
                </form>
            </div>
        </div>

        <div id="mte-chat" class="mte-chat mte-minimized" onclick="mte.handleChatClick(event)">
            <div class="mte-chat-header" id="mte-chat-header">
                <div class="mte-agent">
                    <div class="mte-avatar">🛞<span class="mte-online"></span></div>
                    <div class="mte-info"><strong>Expert Assistant</strong><span>Typically replies instantly</span></div>
                </div>
                <button class="mte-close-chat-btn" onclick="mte.closeChat(event)">&times;</button>
            </div>
            <div id="mte-messages" class="mte-messages"></div>
            <div class="mte-chat-footer">
                <input type="text" id="mte-input" placeholder="Type message..." disabled>
                <button id="mte-send" onclick="mte.send()">➤</button>
            </div>
        </div>

        <div id="mte-exit" class="mte-overlay mte-off">
            <div class="mte-quiz">
                <button class="mte-close" onclick="mte.closeExit()">&times;</button>
                <div id="mte-step1">
                    <div style="font-size:40px">🛠️</div>
                    <h3>Need Emergency Assistance?</h3>
                    <p>Help us prioritize your location.</p>
                    <div class="mte-choices">
                        <button onclick="mte.quizNext(2,'Puncture')">Puncture Repair</button>
                        <button onclick="mte.quizNext(2,'New Tyre')">New Tyre Fitting</button>
                        <button onclick="mte.quizNext(2,'Locked Nut')">Locked Nut Removal</button>
                    </div>
                </div>
                <div id="mte-step2" style="display:none;">
                    <div style="font-size:40px">📍</div>
                    <h3>Are you at home or roadside?</h3>
                    <p>Select your situation.</p>
                    <div class="mte-choices">
                        <button onclick="mte.quizNext(3,'Roadside')">Roadside / Highway</button>
                        <button onclick="mte.quizNext(3,'Home/Work')">Home or Workplace</button>
                    </div>
                </div>
                <div id="mte-final" style="display:none;">
                    <div style="font-size:40px">✅</div>
                    <h3>Fast Dispatch Connect</h3>
                    <p>Enter details for priority support.</p>
                    <form onsubmit="mte.exitSubmit(event)">
                        <div class="mte-field">
                            <label>FULL NAME</label>
                            <input type="text" id="mte-exit-name" required placeholder="Your Name">
                        </div>
                        <div class="mte-field">
                            <label>MOBILE NUMBER</label>
                            <input type="tel" id="mte-exit-phone" required placeholder="Your Mobile">
                        </div>
                        <button type="submit" class="mte-submit">Confirm Interest</button>
                        <div id="mte-exit-msg"></div>
                    </form>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(root);

    // LOGIC
    window.mte = {
        phase: 0,
        chatStep: 0,
        chatData: {},
        quizData: {},

        init() {
            this.soc();
            if (!this.getCookie(COOKIE_NAME)) {
                window.addEventListener('scroll', () => this.scrollCheck());
                document.addEventListener('mouseleave', (e) => this.exitIntent(e));
            }
        },

        scrollCheck() {
            if (this.phase > 0) return;
            const h = document.documentElement, b = document.body;
            const scroll = (h['scrollTop'] || b['scrollTop']) / ((h['scrollHeight'] || b['scrollHeight']) - h.clientHeight) * 100;
            if (scroll > 15) {
                this.phase = 1;
                document.getElementById('mte-overlay').classList.remove('mte-off');
                document.body.classList.add('mte-no-scroll');
                this.setCookie(COOKIE_NAME, '1');
            }
        },

        close() {
            document.getElementById('mte-overlay').classList.add('mte-off');
            document.body.classList.remove('mte-no-scroll');
            if (this.phase === 1) {
                this.phase = 2;
                setTimeout(() => this.toggleChat(), 3000);
            }
        },

        submit(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const msg = document.getElementById('mte-form-msg');
            btn.innerText = 'Processing...'; btn.disabled = true;

            const fd = new FormData(e.target);
            fd.append('access_key', K);
            fd.append('subject', 'New Lead - Mobile Tyre Experts (Popup)');

            fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd })
                .then(r => r.json()).then(res => {
                    if (res.success) {
                        msg.innerHTML = '<div style="color:green;margin-top:10px;text-align:center;font-size:13px;">✅ Request Received! We\'re calling you now.</div>';
                        setTimeout(() => this.close(), 3000);
                    } else {
                        btn.innerText = 'Error. Try again.'; btn.disabled = false;
                    }
                });
        },

        handleChatClick(e) {
            const chat = document.getElementById('mte-chat');
            if (chat.classList.contains('mte-minimized')) {
                this.toggleChat();
            }
        },

        toggleChat() {
            const chat = document.getElementById('mte-chat');
            chat.classList.remove('mte-minimized');
            if (this.chatStep === 0) {
                setTimeout(() => {
                    this.botMsg("Hi! 👋 I'm your Mobile Tyre Care Assistant.");
                    setTimeout(() => {
                        this.botMsg(`How can we help you today?
                        <button class="mte-option" onclick="mte.startChat('Puncture Repair')">📍 Puncture Repair (Roadside)</button>
                        <button class="mte-option" onclick="mte.startChat('Home Fitting')">🏠 Mobile Tyre Fitting (Home)</button>
                        <button class="mte-option" onclick="mte.startChat('Locking Nut')">🔑 Locking Wheel Nut Removal</button>
                        <button class="mte-option" onclick="mte.startChat('Other')">✨ Other Tyre Inquiry</button>`);
                    }, 600);
                }, 400);
            }
        },

        closeChat(e) {
            if (e) e.stopPropagation();
            document.getElementById('mte-chat').classList.add('mte-minimized');
        },

        botMsg(html) {
            const d = document.createElement('div'); d.className = 'mte-msg mte-bot';
            d.innerHTML = html; document.getElementById('mte-messages').appendChild(d);
            document.getElementById('mte-messages').scrollTop = 99999;
        },

        userMsg(txt) {
            const d = document.createElement('div'); d.className = 'mte-msg mte-user';
            d.innerText = txt; document.getElementById('mte-messages').appendChild(d);
            document.getElementById('mte-messages').scrollTop = 99999;
        },

        startChat(intent) {
            this.userMsg(intent);
            this.chatData.intent = intent;
            this.chatStep = 1;
            setTimeout(() => {
                this.botMsg("Could I have your Full Name please?");
                document.getElementById('mte-input').disabled = false;
                document.getElementById('mte-input').focus();
            }, 600);
        },

        send() {
            const inp = document.getElementById('mte-input');
            const val = inp.value.trim(); if (!val) return;
            this.userMsg(val); inp.value = "";

            if (this.chatStep === 1) {
                this.chatData.name = val; this.chatStep = 2;
                setTimeout(() => this.botMsg("Great. And your WhatsApp Number?"), 600);
            } else if (this.chatStep === 2) {
                this.chatData.phone = val;
                this.botMsg("Locating technician... Connecting you now...");

                const fd = new FormData();
                fd.append('access_key', K);
                fd.append('subject', 'Chat Lead - Mobile Tyre Experts');
                fd.append('name', this.chatData.name);
                fd.append('phone', this.chatData.phone);
                fd.append('intent', this.chatData.intent);

                fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd })
                    .then(() => {
                        this.botMsg("✅ Confirmed! A tyre expert will contact you in < 60s.");
                        setTimeout(() => this.closeChat(), 4000);
                    });
            }
        },

        exitIntent(e) {
            if (e.clientY < 0 && !this.getCookie(COOKIE_NAME + '_exit')) {
                document.getElementById('mte-exit').classList.remove('mte-off');
                document.body.classList.add('mte-no-scroll');
                this.setCookie(COOKIE_NAME + '_exit', '1');
            }
        },

        closeExit() { document.getElementById('mte-exit').classList.add('mte-off'); document.body.classList.remove('mte-no-scroll'); },

        quizNext(s, v) {
            if (s === 2) this.quizData.service = v;
            if (s === 3) this.quizData.location = v;

            document.getElementById('mte-step1').style.display = 'none';
            document.getElementById('mte-step2').style.display = 'none';
            document.getElementById('mte-final').style.display = 'none';

            if (s === 2) document.getElementById('mte-step2').style.display = 'block';
            if (s === 3) document.getElementById('mte-final').style.display = 'block';
        },

        exitSubmit(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const msg = document.getElementById('mte-exit-msg');
            btn.innerText = 'Connecting...'; btn.disabled = true;

            const fd = new FormData();
            fd.append('access_key', K);
            fd.append('subject', 'Exit Intent - Mobile Tyre Experts');
            fd.append('name', document.getElementById('mte-exit-name').value);
            fd.append('phone', document.getElementById('mte-exit-phone').value);
            fd.append('service', this.quizData.service);
            fd.append('location', this.quizData.location);

            fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd })
                .then(() => {
                    msg.innerHTML = '<div style="color:green;margin-top:10px">✅ Confirmed! Standby for call.</div>';
                    setTimeout(() => this.closeExit(), 3000);
                });
        },

        setCookie(n, v, d = 7) { const dt = new Date(); dt.setTime(dt.getTime() + (d * 24 * 60 * 60 * 1000)); document.cookie = n + "=" + v + ";expires=" + dt.toUTCString() + ";path=/"; },
        getCookie(n) { const m = document.cookie.match(new RegExp('(^| )' + n + '=([^;]+)')); return m ? m[2] : null; },

        soc() {
            const s = document.getElementById('mte-notif');
            const m = [
                "Michael Johnson (London) just booked puncture repair!",
                "Sarah Williams (Manchester) - Tyre fitted at office!",
                "David Thompson (Birmingham) - 30 min emergency response.",
                "New Request: Mobile fitting in Slough.",
                "Service Alert: Technician dispatched to Watford.",
                "140+ Reports processed by our expert team today."
            ];
            let i = 0;
            const cycle = () => {
                const p = s.querySelector('p');
                if (p) p.innerText = m[i];
                s.classList.remove('mte-off');
                setTimeout(() => s.classList.add('mte-off'), 6000);
                i = (i + 1) % m.length;
            };
            setTimeout(cycle, 2000);
            setInterval(cycle, 15000);
        }
    };

    mte.init();

    // Re-bind to Enter key for chat
    document.addEventListener('keypress', (e) => {
        if (e.which === 13 && document.activeElement.id === 'mte-input') mte.send();
    });

})();
