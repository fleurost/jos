/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Update Data Medis
 * @param {org.hospital.record.UpdateDataMedis} tx
 * @transaction
 */

/**
async function UpdateDataMedis(tx) {

    tx.datamedis.tglMasuk = tx.newTglMasuk;
    tx.datamedis.tglKeluar = tx.newTglKeluar;
    tx.datamedis.alasanMasuk = tx.newAlasanMasuk;
    tx.datamedis.rujukan = tx.newRujukan;
    tx.datamedis.anamnesis = tx.newAnamnesis;
    tx.datamedis.pemeriksaanFisik = tx.newPemeriksaanFisik;
    tx.datamedis.riwayatAlergi = tx.newRiwayatAlergi;
    tx.datamedis.diagnosaPrimer = tx.newDiagnosaPrimer;
    tx.datamedis.diagnosaSekunder = tx.newDiagnosaSekunder;
    tx.datamedis.terapiDiRs = tx.newTerapiDiRs;
    tx.datamedis.tindakan = tx.newTindakan;
    tx.datamedis.prognosaPenyakit = tx.newPrognosaPenyakit;
    tx.datamedis.alasanPulang = tx.newAlasanPulang;
    tx.datamedis.kondisiSaatPulang = tx.newKondisiSaatPulang;
    tx.datamedis.rencanaTindakLanjut = tx.newRencanaTindakLanjut;

    return getAssetRegistry('org.hospital.record.DataMedis')
        .then(function(assetRegistry){
            return assetRegistry.update(tx.datamedis);
        })
        .catch(function(error){
            console.log(error);
        })
}
*/

/**
 * Update Data Pasien
 * @param {org.hospital.record.UpdateDataPasien} tx
 * @transaction
 */

/**
async function UpdateDataPasien(tx) {

    tx.pasien.namaLengkap = tx.newNamaLengkap;
    tx.pasien.tempatTglLahir = tx.newTempatTglLahir;
    tx.pasien.jenisKelamin = tx.newJenisKelamin;
    tx.pasien.umur = tx.newUmur;
    tx.pasien.alamat = tx.newAlamat;
    tx.pasien.statusPernikahan = tx.newStatusPernikahan;
    tx.pasien.goldar = tx.newGoldar;

    return getAssetRegistry('org.hospital.record.Pasien')
        .then(function(assetRegistry){
            return assetRegistry.update(tx.pasien);
        })
        .catch(function(error){
            console.log(error);
        })
}
*/
