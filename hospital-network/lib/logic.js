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
 * Handle a transaction that returns a string.
 * @param {org.hospital.record.CheckIntegrity} transaction
 * @transaction
 */
async function CheckIntegrity(transaction) {
    var diagnosaPrimer = [];
    return getAssetRegistry('org.hospital.record.DataMedis').then(function (assetRegistry) {
        return assetRegistry.getAll().then(function(resourceCollection) {
                resourceCollection.forEach(function (resource) {
                    diagnosaPrimer.push(resource.diagnosaPrimer);

                    var factory = getFactory();
                    var newEvent = factory.newEvent('org.hospital.record', 'DataMedisSent');
                    newEvent.diagnosaPrimer = diagnosaPrimer;
                    emit(newEvent);
                });

        }).catch(function(error){
            console.log(error);
        });
    });
}


/**
 * Handle a transaction that returns a string.
 * @param {org.hospital.record.UpdateDataMedis} tx
 * @transaction
 */
async function UpdateDataMedis(tx) {
    var oldNoRekMedis = tx.sampData.noRekMedis;
    var oldPasien = tx.sampData.pasien;
    var oldDokter = tx.sampData.dokter;
    var oldTglMasuk = tx.sampData.tglMasuk;
    var oldTglKeluar = tx.sampData.tglKeluar;
    var oldAlasanMasuk = tx.sampData.alasanMasuk;
    var oldRujukan = tx.sampData.rujukan;
    var oldAnamnesis = tx.sampData.anamnesis;
    var oldPemeriksaanFisik = tx.sampData.pemeriksaanFisik;
    var oldRiwayatAlergi = tx.sampData.riwayatAlergi;
    var oldDiagnosaPrimer = tx.sampData.diagnosaPrimer;
    var oldDiagnosaSekunder = tx.sampData.diagnosaSekunder;
    var oldTerapiDiRs = tx.sampData.terapiDiRs;
    var oldTindakan = tx.sampData.tindakan;
    var oldPrognosaPenyakit = tx.sampData.prognosaPenyakit;
    var oldAlasanPulang = tx.sampData.alasanPulang;
    var oldKondisiSaatPulang = tx.sampData.kondisiSaatPulang;
    var oldRencanaTindakLanjut = tx.sampData.rencanaTindakLanjut;
    tx.sampData.noRekMedis = tx.newNoRekMedis;
    tx.sampData.pasien = tx.newPasien;
    tx.sampData.dokter = tx.newDokter;
    tx.sampData.tglMasuk = tx.newTglMasuk;
    tx.sampData.tglKeluar = tx.newTglKeluar;
    tx.sampData.alasanMasuk = tx.newAlasanMasuk;
    tx.sampData.rujukan = tx.newRujukan;
    tx.sampData.anamnesis = tx.newAnamnesis;
    tx.sampData.pemeriksaanFisik = tx.newPemeriksaanFisik;
    tx.sampData.riwayatAlergi = tx.newRiwayatAlergi;
    tx.sampData.diagnosaPrimer = tx.newDiagnosaPrimer;
    tx.sampData.diagnosaSekunder = tx.newDiagnosaSekunder;
    tx.sampData.terapiDiRs = tx.newTerapiDiRs;
    tx.sampData.tindakan = tx.newTindakan;
    tx.sampData.prognosaPenyakit = tx.newPrognosaPenyakit;
    tx.sampData.alasanPulang = tx.newAlasanPulang;
    tx.sampData.kondisiSaatPulang = tx.newKondisiSaatPulang;
    tx.sampData.rencanaTindakLanjut = tx.newRencanaTindakLanjut;

    return getAssetRegistry('org.hospital.record.DataMedis').then(function (assetRegistry) {
        return assetRegistry.update(tx.sampData);
    })
    .catch(function (error) {
        console.error(error);
    });
}
