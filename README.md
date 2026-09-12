# OffGrid

Offline-first emergency communication app scaffold.

GitHub Actions builds an Android APK on every push to `main`.

Important: the supplied project currently uses `src/mesh/simulator.ts`. It simulates nearby phones and message routing; it does not yet implement real phone-to-phone Bluetooth/BLE/Wi-Fi mesh communication. The APK is therefore a scaffold/demo build, not a working offline messenger between two physical phones.
