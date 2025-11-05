// js/script.js

// ===== PRODUCT DATA =====
const products = [
    { 
        id: 1, 
        name: "Áo thun trắng", 
        type: "ao", 
        price: 120000, 
        img: "https://via.placeholder.com/300x400/FFB6C1/FFFFFF?text=Áo+Thun+Trắng",
        description: "Áo thun basic chất liệu cotton mềm mại"
    },
    { 
        id: 2, 
        name: "Váy hồng pastel", 
        type: "vay", 
        price: 240000, 
        img: "https://via.placeholder.com/300x400/FFD1DC/FFFFFF?text=Váy+Hồng+Pastel",
        description: "Váy dáng xòe màu hồng pastel dễ thương"
    },
    { 
        id: 3, 
        name: "Vòng tay pha lê", 
        type: "phukien", 
        price: 80000, 
        img: "https://via.placeholder.com/300x400/E6E6FA/FFFFFF?text=Vòng+Tay+Pha+Lê",
        description: "Vòng tay pha lê lấp lánh"
    },
    { 
        id: 4, 
        name: "Áo croptop nữ tính", 
        type: "ao", 
        price: 150000, 
        img: "https://via.placeholder.com/300x400/FFB6C1/FFFFFF?text=Áo+Croptop",
        description: "Áo croptop form rộng thoải mái"
    },
    { 
        id: 5, 
        name: "Váy maxi mùa hè", 
        type: "vay", 
        price: 300000, 
        img: "https://via.placeholder.com/300x400/FFD1DC/FFFFFF?text=Váy+Maxi+Hè",
        description: "Váy maxi dáng dài thoáng mát"
    },
    { 
        id: 6, 
        name: "Túi xách thời trang", 
        type: "phukien", 
        price: 180000, 
        img: "https://via.placeholder.com/300x400/E6E6FA/FFFFFF?text=Túi+Xách+Thời+Trang",
        description: "Túi xách da tổng hợp cao cấp"
    }
];

// ===== CART MANAGEMENT =====
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = document.getElementById("cartCount");
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        saveCart();
        updateCartCount();
        showNotification(`Đã thêm "${product.name}" vào giỏ hàng!`);
    }
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
        cart.splice(index, 1);
        saveCart();
        updateCartCount();
        showNotification("Đã xóa sản phẩm khỏi giỏ hàng!");
    }
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartCount();
    showNotification("Đã xóa toàn bộ giỏ hàng!");
}

// ===== SEARCH FUNCTIONALITY =====
function initSearch() {
    const searchForm = document.getElementById("searchForm");
    if (searchForm) {
        searchForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const keyword = document.getElementById("globalSearch").value.trim();
            if (keyword) {
                window.location.href = "products.html?search=" + encodeURIComponent(keyword);
            } else {
                window.location.href = "products.html";
            }
        });
    }
}

function getSearchKeyword() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('search') || '';
}

// ===== PRODUCT FILTERING =====
function filterProducts() {
    const searchInput = document.getElementById("searchInput");
    const filterSelect = document.getElementById("filterSelect");
    const productList = document.getElementById("productList");
    
    if (!productList) return;

    const search = searchInput ? searchInput.value.toLowerCase() : '';
    const filter = filterSelect ? filterSelect.value : 'all';

    const filtered = products.filter(p =>
        (filter === "all" || p.type === filter) &&
        (p.name.toLowerCase().includes(search) || 
         p.description.toLowerCase().includes(search))
    );

    displayProducts(filtered, productList);
}

function displayProducts(products, container) {
    container.innerHTML = "";

    if (products.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <p class="text-muted">Không tìm thấy sản phẩm nào.</p>
                <button class="btn btn-pink" onclick="clearSearch()">Xóa bộ lọc</button>
            </div>
        `;
        return;
    }

    products.forEach(p => {
        const col = document.createElement("div");
        col.className = "col-md-4 col-lg-4 mb-4";
        col.innerHTML = `
            <div class="card product-card h-100 shadow-sm">
                <img src="${p.img}" class="card-img-top product-image" alt="${p.name}">
                <div class="card-body text-center d-flex flex-column">
                    <h5 class="card-title">${p.name}</h5>
                    <p class="text-muted small">${p.description}</p>
                    <p class="fw-bold text-pink mt-auto">${p.price.toLocaleString()}đ</p>
                    <button class="btn btn-pink mt-2" onclick="addToCart(${p.id})">
                        <i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ
                    </button>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

function clearSearch() {
    const searchInput = document.getElementById("searchInput");
    const filterSelect = document.getElementById("filterSelect");
    
    if (searchInput) searchInput.value = '';
    if (filterSelect) filterSelect.value = 'all';
    
    filterProducts();
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existingNotification = document.querySelector('.custom-notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `custom-notification alert alert-${type === 'success' ? 'success' : 'danger'}`;
    notification.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
            <span>${message}</span>
            <button type="button" class="btn-close" onclick="this.parentElement.parentElement.remove()"></button>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        border-radius: 10px;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// ===== CART PAGE FUNCTIONS =====
function displayCartItems() {
    const cartContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartContainer) return;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                <p class="text-muted">Giỏ hàng của bạn đang trống</p>
                <a href="products.html" class="btn btn-pink">Tiếp tục mua sắm</a>
            </div>
        `;
        if (cartTotal) cartTotal.textContent = '0đ';
        return;
    }
    
    let total = 0;
    cartContainer.innerHTML = cart.map(item => {
        total += item.price;
        return `
            <div class="col-12 mb-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-2">
                                <img src="${item.img}" alt="${item.name}" class="img-fluid rounded" style="height: 100px; object-fit: cover;">
                            </div>
                            <div class="col-md-4">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="text-muted">${item.description}</p>
                            </div>
                            <div class="col-md-3">
                                <p class="fw-bold text-pink">${item.price.toLocaleString()}đ</p>
                            </div>
                            <div class="col-md-3 text-end">
                                <button class="btn btn-outline-danger btn-sm" onclick="removeFromCart(${item.id})">
                                    <i class="fas fa-trash"></i> Xóa
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    if (cartTotal) {
        cartTotal.textContent = total.toLocaleString() + 'đ';
    }
}

// ===== CHECKOUT FUNCTIONS =====
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Giỏ hàng trống! Vui lòng thêm sản phẩm.', 'error');
        return;
    }
    window.location.href = 'checkout.html';
}

function initCheckoutPage() {
    updateCartCount();
    displayCheckoutItems();
    calculateCheckoutTotal();
}

function displayCheckoutItems() {
    const checkoutItems = document.getElementById('checkoutItems');
    if (!checkoutItems) return;
    
    if (cart.length === 0) {
        checkoutItems.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                <p class="text-muted">Giỏ hàng trống</p>
                <a href="products.html" class="btn btn-pink">Quay lại mua sắm</a>
            </div>
        `;
        return;
    }
    
    checkoutItems.innerHTML = cart.map(item => `
        <div class="card mb-3">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col-md-2">
                        <img src="${item.img}" alt="${item.name}" class="img-fluid rounded" style="height: 80px; object-fit: cover;">
                    </div>
                    <div class="col-md-6">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="text-muted small">${item.description}</p>
                    </div>
                    <div class="col-md-2">
                        <p class="fw-bold text-pink">${item.price.toLocaleString()}đ</p>
                    </div>
                    <div class="col-md-2">
                        <span class="badge bg-pink">x1</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function calculateCheckoutTotal() {
    const subtotalElement = document.getElementById('checkoutSubtotal');
    const totalElement = document.getElementById('checkoutTotal');
    
    if (!subtotalElement || !totalElement) return;
    
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const shipping = subtotal > 0 ? 30000 : 0;
    const total = subtotal + shipping;
    
    subtotalElement.textContent = subtotal.toLocaleString() + 'đ';
    totalElement.textContent = total.toLocaleString() + 'đ';
}

function placeOrder() {
    if (cart.length === 0) {
        showNotification('Giỏ hàng trống!', 'error');
        return;
    }
    
    showNotification('Đặt hàng thành công! Cảm ơn bạn đã mua sắm.', 'success');
    
    setTimeout(() => {
        clearCart();
        window.location.href = 'index.html';
    }, 2000);
}

// ===== HOME PAGE FUNCTIONS =====
function initHomePage() {
    updateCartCount();
    initSearch();
    
    const featuredProducts = document.getElementById('featuredProducts');
    if (featuredProducts) {
        const featured = products.slice(0, 4);
        displayProducts(featured, featuredProducts);
    }
}

// ===== PRODUCTS PAGE FUNCTIONS =====
function initProductsPage() {
    updateCartCount();
    initSearch();
    
    const searchInput = document.getElementById("searchInput");
    const keyword = getSearchKeyword();
    if (searchInput && keyword) {
        searchInput.value = keyword;
    }
    
    const filterSelect = document.getElementById("filterSelect");
    if (filterSelect) {
        filterSelect.addEventListener("change", filterProducts);
    }
    
    if (searchInput) {
        searchInput.addEventListener("input", filterProducts);
    }
    
    filterProducts();
}

// ===== CART PAGE FUNCTIONS =====
function initCartPage() {
    updateCartCount();
    displayCartItems();
}

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('index.html') || currentPage === '/') {
        initHomePage();
    } else if (currentPage.includes('products.html')) {
        initProductsPage();
    } else if (currentPage.includes('cart.html')) {
        initCartPage();
    } else if (currentPage.includes('checkout.html')) {
        initCheckoutPage();
    } else {
        updateCartCount();
        initSearch();
    }
});