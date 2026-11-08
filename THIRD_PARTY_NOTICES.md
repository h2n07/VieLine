# Third-party notices · Thành phần bên thứ ba

The VieLine firmware and app use the components below. Each one stays under its own licence; the VieLine terms do not restrict those rights.

*Firmware và app VieLine dùng các thành phần dưới đây. Mỗi thành phần theo giấy phép riêng của nó; điều khoản của VieLine không hạn chế các quyền đó.*

## Firmware (ESP32-S3)
| Component · Thành phần | Licence · Giấy phép | Source · Nguồn |
|---|---|---|
| Arduino core for ESP32 (arduino-esp32) | LGPL-2.1-or-later | https://github.com/espressif/arduino-esp32 |
| ESP-IDF (bootloader, FreeRTOS, mbedTLS, NVS, OTA…) | Apache-2.0 (some parts under their own licences) | https://github.com/espressif/esp-idf |
| LVGL | MIT | https://github.com/lvgl/lvgl |
| NimBLE-Arduino (Apache Mynewt NimBLE) | Apache-2.0 | https://github.com/h2zero/NimBLE-Arduino |
| LovyanGFX | FreeBSD (BSD-2-Clause) + licences of the original Adafruit parts | https://github.com/lovyan03/LovyanGFX |
| Be Vietnam Pro (font, converted to bitmaps in the firmware) | SIL Open Font License 1.1 | https://github.com/bettergui/BeVietnamPro |

**About the LGPL of arduino-esp32:** the firmware links against arduino-esp32 (LGPL-2.1+). Under the LGPL you have the right to:
- obtain the source code of that library (public at the link above);
- ask the VieLine author for the object files of the rest of the firmware, so that you can relink it against a modified arduino-esp32.

*Về LGPL của arduino-esp32: firmware được liên kết với arduino-esp32 (LGPL-2.1+). Theo LGPL, bạn có quyền nhận mã nguồn của chính thư viện đó (công khai ở đường dẫn trên), và yêu cầu tác giả VieLine cung cấp tệp đối tượng (object files) của phần còn lại để tự liên kết lại firmware với một bản arduino-esp32 đã sửa đổi.*

Contact · Liên hệ: https://github.com/h2n07/VieLine/issues.

## Android app
| Component · Thành phần | Licence · Giấy phép | Source · Nguồn |
|---|---|---|
| osmdroid | Apache-2.0 | https://github.com/osmdroid/osmdroid |
| Android SDK / AndroidX runtime shipped with the OS | Apache-2.0 | https://source.android.com |

## Online data and services · Dữ liệu và dịch vụ trực tuyến
| Service · Dịch vụ | Terms · Điều khoản |
|---|---|
| OpenStreetMap map data | © OpenStreetMap contributors, ODbL 1.0 — https://www.openstreetmap.org/copyright |
| Map tiles from tile.openstreetmap.org | Usage policy — https://operations.osmfoundation.org/policies/tiles/ |
| Place search: Photon by komoot (OSM data) | Fair use — https://photon.komoot.io |
| Reverse geocoding: Nominatim | Usage policy — https://operations.osmfoundation.org/policies/nominatim/ |
| Routing: Valhalla (FOSSGIS server or one you configure) | That server's terms |
| Speed cameras and limits: Overpass API (OSM data) | ODbL 1.0, server usage policy |
| ESP Web Tools (browser flasher) | Apache-2.0 — https://github.com/esphome/esp-web-tools |

## Full licence texts · Toàn văn giấy phép
- Apache-2.0: https://www.apache.org/licenses/LICENSE-2.0
- MIT, BSD-2-Clause: see each component's repository · xem kho mã của từng thành phần
- LGPL-2.1: https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html
- SIL OFL 1.1: [notices/OFL-1.1-BeVietnamPro.txt](notices/OFL-1.1-BeVietnamPro.txt)
