import { Component, OnInit, Input } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import { CONFIG } from '@env/configuration';

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: [ './map-box.component.scss' ]
})
export class MapBoxComponent implements OnInit
{
  /// default settings
  map: mapboxgl.Map;

  @Input() latitude: number;
  @Input() longitude: number;

  constructor
  (
  )
  {
  }

  ngOnInit()
  {
    mapboxgl.accessToken = CONFIG.KEYS.MAPBOX;
    this.buildMap();
  }

  private buildMap()
  {
    if (this.longitude && this.latitude)
    {
      const coordinates = [ this.longitude, this.latitude ];

      this.map = new mapboxgl.Map
      ({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 16,
        center: coordinates
      });

      // Add map controls
      this.map.addControl(new mapboxgl.NavigationControl());

      // Add geolocate control to the map.
      this.map.addControl(new mapboxgl.GeolocateControl({
          positionOptions: {
              enableHighAccuracy: true
          },
          trackUserLocation: true
      }));

      // Add marker for passed location
      new mapboxgl.Marker()
          .setLngLat(coordinates)
          .addTo(this.map);

      // disable map zoom when using scroll
      this.map.scrollZoom.disable();
    }
  }
}
