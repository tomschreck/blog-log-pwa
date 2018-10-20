import { Component, OnInit, ViewChild, NgZone, Input } from '@angular/core';

import { MapsAPILoader, LatLngBounds, LatLng, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';

declare var google: any;

interface Marker
{
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

interface Location
{
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  address_level_1?: string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
  marker?: Marker;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.scss' ]
})
export class MapComponent implements OnInit
{
  @Input() latitude: number;
  @Input() longitude: number;

  location: Location =
    {
      lat: 40.730610,
      lng: -73.935242,
      marker:
      {
        lat: 40.730610,
        lng: -73.935242,
        draggable: true
      },
      zoom: 12
    };

  @ViewChild('AgmMap') private map: AgmMap;

  constructor
  (
    public mapsApiLoader: MapsAPILoader
  )
  {
  }

  ngOnInit()
  {
    if (this.latitude && this.longitude)
    {
      this.location.lat = this.latitude;
      this.location.lng = this.longitude;
      this.location.marker.lat = this.latitude;
      this.location.marker.lng = this.longitude;
    }

    this.mapsApiLoader
      .load()
      .then(() =>
      {
      });
  }

}
