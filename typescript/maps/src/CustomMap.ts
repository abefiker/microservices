interface Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
}
export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(dividId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(dividId) as HTMLElement,
      {
        zoom: 1,
        center: { lat: 0, lng: 0 },
      }
    );
  }
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: `${mappable.name}`,
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
