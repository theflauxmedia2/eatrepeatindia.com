import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const ContactMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [mapLoaded, setMapLoaded] = useState(false);

  // Coordinates for LIC Colony, J.P. Nagar, Bengaluru
  const coordinates: [number, number] = [77.5946, 12.9082];

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken.trim()) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: coordinates,
        zoom: 15,
        pitch: 45,
      });

      // Add marker for the restaurant location
      const marker = new mapboxgl.Marker({
        color: '#8B5CF6',
        scale: 1.2
      })
        .setLngLat(coordinates)
        .addTo(map.current);

      // Add popup with restaurant info
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <div class="p-3">
            <h3 class="font-semibold text-lg mb-2">Eat Repeat</h3>
            <p class="text-sm text-gray-600 mb-2">LIC Colony, 17/17, 24th Main Rd<br/>TMC Layout, 1st Phase, J. P. Nagar<br/>Bengaluru, Karnataka 560078</p>
            <p class="text-sm"><strong>Email:</strong> marketingeatrepeatindia@gmail.com</p>
          </div>
        `);

      marker.setPopup(popup);

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      setMapLoaded(true);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!mapLoaded && !mapboxToken) {
    return (
      <div className="bg-white rounded-2xl shadow-elegant p-8">
        <div className="text-center mb-6">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
            Interactive Map
          </h3>
          <p className="font-body text-muted-foreground mb-6">
            Enter your Mapbox public token to see our location on the map
          </p>
        </div>
        
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter Mapbox public token"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="w-full"
          />
          <Button 
            onClick={initializeMap}
            disabled={!mapboxToken.trim()}
            className="w-full"
          >
            Load Map
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Get your token from{' '}
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mapbox.com
            </a>
          </p>
        </div>
      </div>
    );
  }

  if (!mapLoaded) {
    return (
      <div className="bg-white rounded-2xl shadow-elegant p-8">
        <div ref={mapContainer} className="w-full h-96 rounded-xl" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-elegant p-8">
      <div ref={mapContainer} className="w-full h-96 rounded-xl" />
      <div className="mt-4 p-4 bg-gradient-subtle rounded-xl">
        <h4 className="font-display text-lg font-semibold text-foreground mb-2">
          Eat Repeat
        </h4>
        <p className="font-body text-sm text-muted-foreground">
          LIC Colony, 17/17, 24th Main Rd, TMC Layout, 1st Phase, J. P. Nagar, Bengaluru, Karnataka 560078
        </p>
      </div>
    </div>
  );
};

export default ContactMap;