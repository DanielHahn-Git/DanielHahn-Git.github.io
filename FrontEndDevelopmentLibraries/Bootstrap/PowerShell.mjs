let title = "";
var test = 1;
var pad = "01";

import { exec } from 'child_process';

function check(code) {
    //  console.log(`pad: ${pad}`);
    //  console.log(`test: ${test}`);
    exec(code, { 'shell': 'powershell.exe' }, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        /* var copy = stdout.slice(0, 4);
        if (copy == "Fals") {
            // console.log("false");
            let oldPad = `${pad - 1}`;
            var toStr = oldPad.toString();
            oldPad = toStr.padStart(2, "0");
            // console.log(oldPad);
            check(`cd .\\Bootstrap\\; md ${pad}_${title}; copy ${oldPad}[_a-z]*\\index.html .\\${pad}_${title}\\; copy ${oldPad}[_a-z]*\\styles.css .\\${pad}_${title}\\; cd .\\${pad}_${title}\\; ls`);
            //check(`cd .\\Bootstrap\\; md ${pad}_${title}; cd .\\${pad}_${title}\\; New-Item index.html; New-Item styles.css`);

        } else if (copy == "True") {
            //   console.log("true");
            test++;
            //     console.log(`test: ${test}`);
            var toStr = test.toString();
            pad = toStr.padStart(2, "0");
            //       console.log(`true pad: ${pad}`);
            check(`cd .\\Bootstrap\\; Test-Path .\\${pad}[_a-z]*\\`);
        } */

    })
}

function checkTitle(code) {
    //  console.log(`pad: ${pad}`);
    //  console.log(`test: ${test}`);
    exec(code, { 'shell': 'powershell.exe' }, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        var copy = stdout.slice(0, 4);
        if (copy == "Fals") {
            console.log("Esta pasta não existe");
            check(`cd .\\Bootstrap\\; $num = 01; $num; [string]$pad = "{0:d2}" -f $num; for ($i = 1; $i -lt 200; $i++ ) { if (Test-Path .\\$pad[_a-z]*\\){$num; $num++; [string]$pad = "{0:d2}" -f $num; $pad} if ( -not (Test-Path .\\$pad[_a-z]*\\)){$num; $i=200; $pad; [string]$oldPad = "{0:d2}" -f $num -1; $oldPad;  write-output "oldPad"; [string]$title = "${title}"; $title; $pad; md $pad"_"$title; copy .\\$oldPad[_a-z]*\\index.html .\\$pad"_"$title\\; copy .\\$oldPad[_a-z]*\\styles.css .\\$pad"_"$title\\; cd .\\$pad"_"$title\\; ls }  }`);
        } else if (copy == "True") {
            console.log("Esta pasta ja existe.");
        }

    })
}

function fileName(str) {
    let arr = str.split(/\s+/);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
    }
    title = arr.join("");
    console.log(title);
    checkTitle(`cd .\\Bootstrap\\; Test-Path .\\[0-9]*_${title}\\`);
}

fileName("Usar comentários para deixar  código mais claro");