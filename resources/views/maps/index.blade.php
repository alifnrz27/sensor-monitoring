@extends('layouts.app')

@section('content')
<style>
    #detail-panel {
        transition: transform 0.3s ease;
    }
    .invisible-panel {
        transform: translateX(100%);
    }
    #map {
        height: 100%; /* atau ukuran spesifik lainnya, seperti 500px */
        width: 100%;
    }
</style>
    <div x-data="{ sidebar: true, popupNavbar: false }" class="relative flex">
        <div class="absolute w-full h-[250px] bg-[#083C76] -z-10">

        </div>
        @include('components.sidebar')
        <div class="min-h-screen" :class="sidebar ? 'w-10/12' : 'w-full'">
            @include('components.navbar')
            <div class="container mx-auto p-4 max-h-screen overflow-auto">
                @include('components.breadcrumb', [
                    'lists' => [
                        [
                            'title' => 'Maps',
                            'route' => '#',
                            'is_active' => true,
                        ],
                    ],
                ])
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-2xl font-semibold text-gray-800 mb-4 text-white">Maps</h2>
                </div>

                <div class="overflow-x-auto bg-white px-6 py-10 rounded-lg shadow-lg">
                    <div class="lg:flex lg:gap-2 w-full">
                        <div class="w-full flex flex-col gap-2">
                            {{-- <h3 class="font-bold">Group</h3> --}}
                            <input type="text" class="w-full px-4 py-2 rounded-lg border mb-4" name="" id="deviceSearch">
                        </div>
                        {{-- <div class="w-full flex flex-col gap-2">
                            <h3 class="font-bold">Group</h3>
                            <select name="group_id" id="group_id" class="w-full px-4 py-2 rounded-lg border mb-4" onchange="this.form.submit()">
                                <option value="">Select Group</option>
                                @foreach ($groups as $item)
                                <option @if($item['group_id'] == $group_id) selected @endif value="{{ $item['group_id'] }}">{{ $item['group_name'] }}</option>    
                                @endforeach
                            </select>
                        </div>
                        <div class="w-full flex flex-col gap-2">
                            <h3 class="font-bold">City</h3>
                            <select name="city_id" id="city_id" class="w-full px-4 py-2 rounded-lg border mb-4" onchange="this.form.submit()">
                                <option value="">Select City</option>
                                @foreach ($cities as $item)
                                <option @if($item['city_id'] == $city_id) selected @endif value="{{ $item['city_id'] }}">{{ $item['city_name'] }}</option>    
                                @endforeach
                            </select>
                        </div> --}}
                    </div>
                    
                    {{-- <div class="lg:flex lg:gap-2 w-full">
                        @if(count($districts) > 0)
                        <div class="w-full flex flex-col gap-2">
                            <h3 class="font-bold">District</h3>
                            <select name="district_id" id="district_id" class="w-full px-4 py-2 rounded-lg border mb-4" onchange="this.form.submit()">
                                <option value="">Select District</option>
                                @foreach ($districts as $item)
                                <option @if($item['district_id'] == $district_id) selected @endif value="{{ $item['district_id'] }}">{{ $item['district_name'] }}</option>    
                                @endforeach
                            </select>
                        </div>
                        @endif
                        @if(count($subdistricts) > 0)
                        <div class="w-full flex flex-col gap-2">
                            <h3 class="font-bold">Subdistrict</h3>
                            <select name="subdistrict_id" id="subdistrict_id" class="w-full px-4 py-2 rounded-lg border mb-4" onchange="this.form.submit()">
                                <option value="">Select Subdistrict</option>
                                @foreach ($subdistricts as $item)
                                <option @if($item['subdistrict_id'] == $subdistrict_id) selected @endif value="{{ $item['subdistrict_id'] }}">{{ $item['subdistrict_name'] }}</option>    
                                @endforeach
                            </select>
                        </div>
                        @endif
                    </div> --}}

                    <div id="map" style="width: 100%; height: 500px;"></div>
                </div>
                <div id="detail-panel" style="z-index: 1000" class="fixed top-0 right-0 w-full md:w-2/3 h-screen bg-white shadow-lg p-4 invisible-panel overflow-y-auto">
                    <button onclick="closePanel()" class="absolute top-2 right-4 text-gray-600 text-[24px]">&times;</button>
                    <div id="detail-content"></div>
                </div>
            </div>
        </div>
    </div>

    @include('components.chart')

    <script>
        // Fungsi untuk menampilkan detail
        function showDetail(id) {
            // Tampilkan panel
            document.getElementById('detail-panel').classList.remove('invisible-panel');

            // Kirim request untuk mendapatkan data dari API dan tambahkan `from_map=true` dalam parameter
            fetch(`/devices/${id}?from_map=true`, {
                method: 'GET',
            })
            .then(response => response.text())  // Mengambil sebagai teks HTML
            .then(data => {
                // Isi konten detail dengan data respons
                document.getElementById('detail-content').innerHTML = data;
            })
            .catch(error => console.error('Error:', error));
        }

        // Fungsi untuk menutup panel
        function closePanel() {
            document.getElementById('detail-panel').classList.add('invisible-panel');
            document.getElementById('detail-content').innerHTML = ''; // Kosongkan konten
        }

        window.onload = function () {
            var devices = {!! json_encode($allDevices) !!};
            initializeMap(devices);
        };

        // Variabel global untuk menyimpan instance peta
        let map = null;

        function initializeMap(devices) {
            // Tentukan lokasi default (Bandung) jika array devices kosong
            const defaultLat = -6.9175;
            const defaultLng = 107.6191;
            const initialLat = devices && devices.length > 0 ? devices[0].lat : defaultLat;
            const initialLng = devices && devices.length > 0 ? devices[0].lng : defaultLng;

            // Periksa apakah peta sudah diinisialisasi
            if (!map) {
                // Inisialisasi peta jika belum ada
                map = L.map('map').setView([initialLat, initialLng], 15);

                // Tambahkan layer tile dari OpenStreetMap
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '© OpenStreetMap contributors'
                }).addTo(map);
            } else {
                // Reset posisi peta jika sudah ada
                map.setView([initialLat, initialLng], 15);
            }

            // Hapus semua layer sebelumnya (jika ada)
            map.eachLayer(function (layer) {
                if (layer instanceof L.Marker) {
                    map.removeLayer(layer);
                }
            });

            // Variabel untuk menyimpan semua posisi marker
            const bounds = [];

            if (devices) {
                // Menambahkan marker untuk setiap perangkat
                devices.forEach(function (device) {
                    if (device.lat && device.lng) {
                        const position = [parseFloat(device.lat), parseFloat(device.lng)];

                        // Tentukan ikon berdasarkan sumber data
                        const iconUrl = '{{ asset('asset/img/Icon/router_12068565.png') }}';

                        // Konfigurasi ikon marker
                        const icon = L.icon({
                            iconUrl: iconUrl,
                            iconSize: [32, 32],
                            iconAnchor: [16, 32]
                        });

                        // Tambahkan posisi ke bounds
                        bounds.push(position);

                        // Buat marker
                        const marker = L.marker(position, { icon: icon }).addTo(map);

                        // Buat konten popup dinamis
                        const popupContent = `
                            <div>
                                <strong>Device Name:</strong> ${device.device_name}<br>
                                <strong>Address:</strong> ${device.address}<br>
                                <strong>Point Code:</strong> ${device.point_code}<br>
                                <strong>Location Info:</strong> ${device.location_information}<br>
                            </div>
                        `;

                        // Tambahkan event hover (mouseover dan mouseout)
                        marker.on('mouseover', function () {
                            marker.bindPopup(popupContent).openPopup();
                        });

                        marker.on('mouseout', function () {
                            marker.closePopup();
                        });

                        // Tambahkan event click untuk menampilkan detail
                        marker.on('click', function () {
                            showDetail(device.id);
                        });
                    }
                });
            }

            // Sesuaikan peta agar semua marker terlihat
            if (bounds.length > 0) {
                map.fitBounds(bounds);
            } else {
                map.setView([defaultLat, defaultLng], 15); // Zoom pada 15 jika tidak ada marker
            }

            map.invalidateSize();
        }


        var searchInput = document.getElementById('deviceSearch');

        // Fungsi untuk melakukan pencarian perangkat
        function searchDevices() {
            var query = searchInput.value;

            // Lakukan permintaan AJAX ke URL
            fetch('/devices/list?from_api=1&search=' + encodeURIComponent(query))
                .then(response => response.json())
                .then(data => {
                    if (data.data) {
                        // Perbarui peta dengan perangkat terbaru
                        initializeMap(data.data);
                    }
                })
                .catch(error => {
                    console.error('Error fetching devices:', error);
                });
        }

        // Event ketika pengguna menekan Enter
        searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                searchDevices();
            }
        });

        // Event ketika input kehilangan fokus (blur)
        searchInput.addEventListener('blur', function () {
            searchDevices();
        });


    </script>
    
    
@endsection
