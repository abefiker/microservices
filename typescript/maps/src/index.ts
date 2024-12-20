declare let google: any; // Ensure TypeScript knows about the Google Maps API.

function initMap(): void {
  const map = new google.maps.Map(document.getElementById("maps") as HTMLElement, {
    zoom: 1,
    center: { lat: 0, lng: 0 },
  });
}

// Expose `initMap` to the global scope so it can be called as a callback.
(window as any).initMap = initMap;
