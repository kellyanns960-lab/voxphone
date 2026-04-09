self.addEventListener('install', function(event) {
    console.log('Service Worker: Installed');
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker: Activated');
});

self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'No payload',
        icon: 'icon.png'
    };

    event.waitUntil(
        self.registration.showNotification('Incoming Call', options)
    );
});