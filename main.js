// Page Templates
const templates = {
    home: `
        <section class="hero">
            <div class="container hero-split">
                <div class="hero-text-content">
                    <p class="hero-top-text">Safety & Efficiency for Industry 4.0</p>
                    <h1 class="hero-main-title">작업자와 공존하는<br>스마트한 선택</h1>
                    <p class="hero-sub-text">앤티그래비티의 협동로봇은 인간과 기계의 완벽한 협업 환경을 창조하여 제조 현장의 미래를 제시합니다.</p>
                    <div class="hero-btns">
                        <a href="#" class="btn-primary" data-route="products">제품 라인업 보기</a>
                    </div>
                </div>
                <div class="hero-visual-content">
                    <img src="assets/hero.png" alt="Antigravity Robot" class="hero-robot-img">
                </div>
            </div>
            <div class="hero-glow"></div>
        </section>

        <section class="container reveal">
            <div class="section-title">
                <h2>Product Line-up</h2>
                <div class="divider"></div>
            </div>
            <div class="grid">
                <div class="card" data-route="products">
                    <div class="card-img"><img src="assets/robot_a10.png" alt="A-Series"></div>
                    <div class="card-body">
                        <h3>A-Series (All-rounder)</h3>
                        <p>가장 범용적인 협동로봇 라인업. 조립, 검사, 포장 등 다양한 공정에 최적화되어 있습니다.</p>
                    </div>
                </div>
                <div class="card" data-route="products">
                    <div class="card-img"><img src="assets/robot_a10.png" alt="P-Series" style="filter: hue-rotate(45deg);"></div>
                    <div class="card-body">
                        <h3>P-Series (Precision)</h3>
                        <p>고정밀 작업을 위한 라인업. ±0.02mm의 반복 정밀도로 미세 공정을 지원합니다.</p>
                    </div>
                </div>
                <div class="card" data-route="products">
                    <div class="card-img"><img src="assets/robot_a10.png" alt="H-Series" style="filter: brightness(0.8);"></div>
                    <div class="card-body">
                        <h3>H-Series (High-payload)</h3>
                        <p>최대 20kg 하중을 견디는 강력한 라인업. 팔레타이징 및 중량물 취급에 적합합니다.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="container reveal" style="padding-top: 4rem; padding-bottom: 4rem; border-top: 1px solid #222;">
            <div style="text-align: center; margin-bottom: 2rem;">
                <p style="color: var(--text-muted); font-weight: 600; letter-spacing: 1px; font-size: 0.8rem;">TRUSTED BY GLOBAL PARTNERS</p>
            </div>
            <div style="display: flex; justify-content: space-around; align-items: center; filter: grayscale(1); opacity: 0.5;">
                <h3 style="font-style: italic; color: #999;">SAMSUNG</h3>
                <h3 style="font-style: italic; color: #999;">HYUNDAI</h3>
                <h3 style="font-style: italic; color: #999;">LG ELECTRONICS</h3>
                <h3 style="font-style: italic; color: #999;">POSCO</h3>
            </div>
        </section>

        <section class="stats container">
            <div class="stat-item">
                <h4 class="counter" data-target="1500">0</h4>
                <p>도입 기업 수</p>
            </div>
            <div class="stat-item">
                <h4 class="counter" data-target="24">0</h4>
                <p>글로벌 인증</p>
            </div>
            <div class="stat-item">
                <h4 class="counter" data-target="500000">0</h4>
                <p>누적 구동 시간 (h)</p>
            </div>
        </section>
    `,
    products: `
        <section class="container" style="padding-top: 10rem;">
            <div class="section-title">
                <h2>A-Series 상세 사양</h2>
                <div class="divider"></div>
            </div>
            <div class="sticky-container">
                <div class="sticky-img">
                    <img src="assets/robot_a10.png" alt="Robot A10">
                </div>
                <div class="scroll-content">
                    <div style="margin-bottom: 4rem;">
                        <h3 style="font-size: 2rem; margin-bottom: 1rem;">Antigravity A-10</h3>
                        <p style="color: var(--text-muted); font-size: 1.1rem;">
                            A-10은 가장 인기 있는 모델로, 10kg의 가반 하중과 1300mm의 작업 반경을 제공합니다. 
                            충돌 감지 알고리즘이 내장되어 작업자와의 안전한 공존을 보장합니다.
                        </p>
                    </div>
                    
                    <table class="board-table" style="margin-bottom: 4rem;">
                        <thead>
                            <tr>
                                <th>사양 항목</th>
                                <th>상세 정보</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>가반 하중 (Payload)</td><td>10 kg</td></tr>
                            <tr><td>작업 반경 (Reach)</td><td>1300 mm</td></tr>
                            <tr><td>반복 정밀도 (Repeatability)</td><td>±0.03 mm</td></tr>
                            <tr><td>자유도 (Degrees of Freedom)</td><td>6 Axis</td></tr>
                            <tr><td>자중 (Weight)</td><td>33.5 kg</td></tr>
                        </tbody>
                    </table>

                    <div style="margin-bottom: 4rem;">
                        <h4 style="margin-bottom: 1rem;">주요 특징</h4>
                        <ul style="padding-left: 1.5rem; color: var(--text-muted);">
                            <li>지능형 충돌 감지 및 세이프 스탑</li>
                            <li>직관적인 그래픽 UI 티칭 펜던트</li>
                            <li>IP54 등급 방수/방진 (산업용 옵션 IP66)</li>
                            <li>빠른 설치 및 재배치 가능 (평균 1시간 이내)</li>
                        </ul>
                    </div>

                    <a href="#" class="btn-primary" data-route="contact">카탈로그 다운로드</a>
                </div>
            </div>
        </section>
    `,
    applications: `
        <section class="container reveal" style="padding-top: 10rem;">
            <div class="section-title">
                <h2>Industrial Applications</h2>
                <div class="divider"></div>
            </div>
            <div class="grid">
                <div class="card">
                    <div class="card-img"><img src="assets/welding.png" alt="Welding"></div>
                    <div class="card-body">
                        <h3>용접 (Welding)</h3>
                        <p>일관된 품질의 고정밀 용접 작업을 수행합니다. 작업자의 근골격계 부담을 줄이고 생산성을 30% 이상 향상시킵니다.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img"><img src="assets/hero.png" alt="Assembly" style="filter: grayscale(1);"></div>
                    <div class="card-body">
                        <h3>조립 및 검사 (Assembly)</h3>
                        <p>비전 센서와 결합하여 정밀한 부품 조립과 불량품 검사를 동시 수행합니다.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img"><img src="assets/hero.png" alt="F&B" style="filter: sepia(0.5);"></div>
                    <div class="card-body">
                        <h3>F&B (푸드테크)</h3>
                        <p>커피 추출, 치킨 조리 등 푸드 테크 분야에서도 위생적이고 일관된 서비스 로봇으로 활약합니다.</p>
                    </div>
                </div>
            </div>
        </section>
    `,
    support: `
        <section class="container reveal" style="padding-top: 10rem;">
            <div class="section-title">
                <h2>고객 지원 센터</h2>
                <div class="divider"></div>
            </div>
            <div class="grid" style="grid-template-columns: repeat(2, 1fr);">
                <div class="board-container">
                    <h3>기술 문서 자료실</h3>
                    <ul style="list-style: none; margin-top: 1rem;">
                        <li style="padding: 1rem 0; border-bottom: 1px solid #eee;">
                            <a href="#" style="text-decoration: none; color: var(--text-main); display: flex; justify-content: space-between;">
                                <span>[CAD] A-Series 2D/3D Drawing</span>
                                <span style="color: var(--primary);">Download</span>
                            </a>
                        </li>
                        <li style="padding: 1rem 0; border-bottom: 1px solid #eee;">
                            <a href="#" style="text-decoration: none; color: var(--text-main); display: flex; justify-content: space-between;">
                                <span>[Manual] 운영 및 설치 가이드 (KR)</span>
                                <span style="color: var(--primary);">Download</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="board-container">
                    <h3>소프트웨어 업데이트</h3>
                    <ul style="list-style: none; margin-top: 1rem;">
                        <li style="padding: 1rem 0; border-bottom: 1px solid #eee;">
                            <span>AGOS (Antigravity OS) v2.4.1</span>
                            <span style="float: right; color: var(--text-muted);">2026.04.12</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    `,
    news: `
        <section class="container reveal" style="padding-top: 10rem;">
            <div class="section-title">
                <h2>고객 소통 게시판</h2>
                <p>궁금한 점이나 도입 사례를 공유해 주세요.</p>
                <div class="divider"></div>
            </div>
            <div class="board-container">
                <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                    <h3>최근 게시물</h3>
                    <button class="btn-primary" style="padding: 0.5rem 1rem;" data-route="news_write">글쓰기</button>
                </div>
                <table class="board-table">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>날짜</th>
                        </tr>
                    </thead>
                    <tbody id="board-list">
                        <tr><td colspan="4" style="text-align:center; padding: 2rem;">데이터베이스 연결 중...</td></tr>
                    </tbody>
                </table>
            </div>
        </section>
    `,
    news_write: `
        <section class="container reveal" style="padding-top: 10rem;">
            <div class="section-title">
                <h2>새 글 작성하기</h2>
                <div class="divider"></div>
            </div>
            <div class="board-container" style="max-width: 800px; margin: 0 auto;">
                <form id="post-form">
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">제목</label>
                        <input type="text" id="post-title" required placeholder="제목을 입력하세요" style="width: 100%; padding: 0.8rem; background: #222; border: 1px solid #444; color: #fff; border-radius: 5px;">
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">작성자</label>
                            <input type="text" id="post-author" required placeholder="성함 또는 기업명" style="width: 100%; padding: 0.8rem; background: #222; border: 1px solid #444; color: #fff; border-radius: 5px;">
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">비밀번호 (수정/삭제용)</label>
                            <input type="password" id="post-password" required placeholder="비밀번호 4자리" style="width: 100%; padding: 0.8rem; background: #222; border: 1px solid #444; color: #fff; border-radius: 5px;">
                        </div>
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">내용</label>
                        <textarea id="post-content" required placeholder="내용을 입력하세요" style="width: 100%; padding: 0.8rem; background: #222; border: 1px solid #444; color: #fff; border-radius: 5px; height: 300px;"></textarea>
                    </div>
                    <div style="display: flex; gap: 1rem;">
                        <button type="submit" class="btn-primary" style="flex: 1;">등록하기</button>
                        <button type="button" class="btn-primary" style="flex: 1; background: #444;" data-route="news">취소</button>
                    </div>
                </form>
            </div>
        </section>
    `,
    news_edit: `
        <section class="container reveal" style="padding-top: 10rem;">
            <div class="section-title">
                <h2>게시물 수정하기</h2>
                <div class="divider"></div>
            </div>
            <div class="board-container" style="max-width: 800px; margin: 0 auto;">
                <form id="edit-form">
                    <input type="hidden" id="edit-id">
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">제목</label>
                        <input type="text" id="edit-title" required style="width: 100%; padding: 0.8rem; background: #222; border: 1px solid #444; color: #fff; border-radius: 5px;">
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">내용</label>
                        <textarea id="edit-content" required style="width: 100%; padding: 0.8rem; background: #222; border: 1px solid #444; color: #fff; border-radius: 5px; height: 300px;"></textarea>
                    </div>
                    <div style="display: flex; gap: 1rem;">
                        <button type="submit" class="btn-primary" style="flex: 1;">수정 완료</button>
                        <button type="button" class="btn-primary" style="flex: 1; background: #444;" data-route="news">취소</button>
                    </div>
                </form>
            </div>
        </section>
    `,
    contact: `
         <section class="container" style="padding-top: 10rem;">
            <div class="section-title">
                <h2>도입 문의하기</h2>
                <p>귀사의 산업 현장에 최적화된 로보틱스 솔루션을 제안해 드립니다.</p>
                <div class="divider"></div>
            </div>
            <div class="board-container" style="max-width: 600px; margin: 0 auto;">
                <form id="contact-form">
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">회사명</label>
                        <input type="text" placeholder="회사명을 입력하세요" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 5px;">
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">연락처</label>
                        <input type="text" placeholder="010-0000-0000" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 5px;">
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">관심 페이로드 (kg)</label>
                        <select style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 5px;">
                            <option>3kg 미만</option>
                            <option>5kg - 10kg</option>
                            <option>10kg 이상</option>
                        </select>
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">문의 내용</label>
                        <textarea placeholder="공정 내용 및 요구사항을 적어주세요" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 5px; height: 150px;"></textarea>
                    </div>
                    <button type="submit" class="btn-primary" style="width: 100%;">상담 신청하기</button>
                </form>
            </div>
        </section>
    `
};

// Router Function
function navigate(route, params = null) {
    const appContent = document.getElementById('app-content');
    
    if (route === 'news_detail' && params) {
        if (window.db) {
            window.db.collection("posts").doc(params).get().then((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    appContent.innerHTML = `
                        <section class="container reveal" style="padding-top: 10rem;">
                            <div class="board-container">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 2rem;">
                                    <a href="#" data-route="news" style="color: var(--primary); text-decoration: none;">← 목록으로 돌아가기</a>
                                    <div style="display: flex; gap: 0.5rem;">
                                        <button onclick="window.editPost('${doc.id}')" style="background: none; border: 1px solid #444; color: #fff; padding: 0.3rem 0.8rem; cursor: pointer; border-radius: 4px;">수정</button>
                                        <button onclick="window.deletePost('${doc.id}')" style="background: none; border: 1px solid #ff4d4d; color: #ff4d4d; padding: 0.3rem 0.8rem; cursor: pointer; border-radius: 4px;">삭제</button>
                                    </div>
                                </div>
                                <h2 style="margin-bottom: 1rem; color: var(--primary);">${data.title}</h2>
                                <div style="color: var(--text-muted); margin-bottom: 2rem; border-bottom: 1px solid #333; padding-bottom: 1rem;">
                                    <span>작성자: ${data.author}</span> | <span>날짜: ${data.date || data.Date || '-'}</span>
                                </div>
                                <div style="line-height: 1.8; font-size: 1.1rem; min-height: 300px; color: #ccc;">
                                    ${(data.content || '').replace(/\n/g, '<br>')}
                                </div>
                            </div>
                        </section>
                    `;
                    setTimeout(initScrollReveal, 100);
                }
            }).catch(err => {
                console.error("Detail Fetch Error:", err);
                navigate('news');
            });
        }
    } else {
        appContent.innerHTML = templates[route] || templates.home;
    }

    if (route === 'news') {
        renderBoardFromFirebase();
    }

    window.scrollTo(0, 0);
    if (route === 'home') startCounters();
    setTimeout(initScrollReveal, 100);

    document.querySelectorAll('nav a').forEach(link => {
        const linkRoute = link.getAttribute('data-route');
        if (linkRoute === route || (route === 'news_detail' && linkRoute === 'news')) {
            link.classList.add('active');
            link.style.color = 'var(--primary)';
        } else {
            link.classList.remove('active');
            link.style.color = '#fff';
        }
    });
}

// Scroll Reveal Observer
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Real-time Board Rendering
function renderBoardFromFirebase() {
    const listContainer = document.getElementById('board-list');
    if (!listContainer) return;
    if (!window.db) {
        listContainer.innerHTML = '<tr><td colspan="4" style="text-align:center; padding: 2rem;">데이터베이스 연결 중...</td></tr>';
        return;
    }

    window.db.collection("posts").orderBy("id", "desc").onSnapshot((snapshot) => {
        renderSnapshot(snapshot);
    }, (error) => {
        window.db.collection("posts").get().then(renderSnapshot);
    });

    function renderSnapshot(snapshot) {
        if (!listContainer) return;
        if (snapshot.empty) {
            listContainer.innerHTML = '<tr><td colspan="4" style="text-align:center; padding: 2rem;">등록된 게시물이 없습니다.</td></tr>';
            return;
        }
        listContainer.innerHTML = snapshot.docs.map(doc => {
            const data = doc.data();
            return `
                <tr style="cursor: pointer;" onclick="window.navigateDetail('${doc.id}')" class="reveal">
                    <td>${data.id || '-'}</td>
                    <td style="font-weight: 500;">${data.title}</td>
                    <td>${data.author}</td>
                    <td>${data.date || data.Date || '-'}</td>
                </tr>
            `;
        }).join('');
        setTimeout(initScrollReveal, 50);
    }
}

// Global Nav Helpers
window.navigateDetail = (id) => navigate('news_detail', id);

window.editPost = async function(docId) {
    const doc = await window.db.collection("posts").doc(docId).get();
    if (!doc.exists) return;
    const data = doc.data();
    
    const pw = prompt("글 작서 시 입력한 비밀번호를 입력해주세요.");
    if (pw === data.password) {
        navigate('news_edit');
        document.getElementById('edit-id').value = docId;
        document.getElementById('edit-title').value = data.title;
        document.getElementById('edit-content').value = data.content;
    } else if (pw !== null) {
        alert("비밀번호가 일치하지 않습니다.");
    }
};

window.deletePost = async function(docId) {
    const doc = await window.db.collection("posts").doc(docId).get();
    if (!doc.exists) return;
    const data = doc.data();
    
    const pw = prompt("글 작서 시 입력한 비밀번호를 입력해주세요.");
    if (pw === data.password) {
        if (confirm("정말로 이 글을 삭제하시겠습니까?")) {
            await window.db.collection("posts").doc(docId).delete();
            alert("게시물이 삭제되었습니다.");
            navigate('news');
        }
    } else if (pw !== null) {
        alert("비밀번호가 일치하지 않습니다.");
    }
};

// Form Handlers
async function handlePostSubmit(e) {
    e.preventDefault();
    if (!window.db) return alert("연결 오류!");

    const title = document.getElementById('post-title').value;
    const author = document.getElementById('post-author').value;
    const password = document.getElementById('post-password').value;
    const content = document.getElementById('post-content').value;
    
    let nextId = 1;
    try {
        const snap = await window.db.collection("posts").orderBy("id", "desc").limit(1).get();
        if (!snap.empty) nextId = (Number(snap.docs[0].data().id) || 0) + 1;
    } catch(e) {}

    const today = new Date().toISOString().split('T')[0];
    try {
        await window.db.collection("posts").add({ title, author, password, content, date: today, id: nextId });
        alert("게시물이 등록되었습니다!");
        navigate('news');
    } catch (error) { alert("오류: " + error.message); }
}

async function handleEditSubmit(e) {
    e.preventDefault();
    const docId = document.getElementById('edit-id').value;
    const title = document.getElementById('edit-title').value;
    const content = document.getElementById('edit-content').value;

    try {
        await window.db.collection("posts").doc(docId).update({ title, content });
        alert("수정이 완료되었습니다.");
        navigate('news_detail', docId);
    } catch (error) { alert("오류: " + error.message); }
}

function handleFormSubmit(e) {
    e.preventDefault();
    alert('문의가 접수되었습니다.');
    navigate('home');
}

// Stats Animation
function startCounters() {
    document.querySelectorAll('.counter').forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const inc = target / 100;
        const update = () => {
            if (count < target) {
                count += inc;
                counter.innerText = Math.ceil(count).toLocaleString();
                setTimeout(update, 15);
            } else {
                counter.innerText = target.toLocaleString() + (target > 500 ? '+' : '');
            }
        };
        update();
    });
}

// Header Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (header) header.classList.toggle('scrolled', window.scrollY > 50);
});

// Initialization
function init() {
    document.addEventListener('click', (e) => {
        const routeEl = e.target.closest('[data-route]');
        if (routeEl) {
            e.preventDefault();
            navigate(routeEl.getAttribute('data-route'));
        }
    });

    document.addEventListener('submit', (e) => {
        if (e.target.id === 'post-form') handlePostSubmit(e);
        if (e.target.id === 'edit-form') handleEditSubmit(e);
        if (e.target.id === 'contact-form') handleFormSubmit(e);
    });

    navigate('home');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
