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
