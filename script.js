// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sayfa yüklendi!");
  });
  
  // Sayfa altına kaydırıldığında bir uyarı göster
  window.onscroll = () => {
    if (window.scrollY > 100) {
      console.log("Sayfanın altına doğru kaydırdınız!");
    }
  };
  