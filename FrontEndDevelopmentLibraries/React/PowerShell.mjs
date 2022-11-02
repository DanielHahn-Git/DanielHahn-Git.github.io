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

/* check(`cd .\\SASS\\; $num = 01; $num; write-output "primeiro num"; [string]$pad = "{0:d2}" -f $num; for ($i = 1; $i -lt 200; $i++ ) { if (Test-Path .\\$pad[_a-z]*\\){$num; write-output "num for"; $num++; [string]$pad = "{0:d2}" -f $num; $pad; write-output "pad for"} if ( -not (Test-Path .\\$pad[_a-z]*\\)){$num; write-output "num if not"; $i=200; $pad; write-output "pad if not"; $aux = $num -1; [string]$oldPad = "{0:d2}" -f $aux; $oldPad; write-output "oldPad if not"; [string]$title = "${title}"; $title; $pad; $oldPad; write-output "oldPad after title"; if ($oldPad -eq "00"){md $pad"_"$title; cd .\\$pad"_"$title\\; New-Item index.html; New-Item styles.css} else { write-output "else"; $oldPad;  write-output "oldPad else"; md $pad"_"$title; copy .\\$oldPad[_a-z]*\\index.html .\\$pad"_"$title\\; copy .\\$oldPad[_a-z]*\\styles.css .\\$pad"_"$title\\; cd .\\$pad"_"$title\\; ls} }  }`); */

 /* md $pad"_"$title; copy.\\$oldPad[_a - z] *\\index.html.\\$pad"_"$title\\; copy.\\$oldPad[_a - z] *\\styles.css.\\$pad"_"$title\\; cd.\\$pad"_"$title\\; 
 
 
 copy .\\$oldPad[_a-z]*\\index.html .\\$pad"_"$title\\; copy .\\$oldPad[_a-z]*\\styles.css .\\$pad"_"$title\\; cd .\\$pad"_"$title\\;*/

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
            check(`cd .\\React\\; $num = 01; $num; write-output "primeiro num"; [string]$pad = "{0:d2}" -f $num; for ($i = 1; $i -lt 200; $i++ ) { if (Test-Path .\\$pad[_a-z]*\\){$num; write-output "num for"; $num++; [string]$pad = "{0:d2}" -f $num; $pad; write-output "pad for"} if ( -not (Test-Path .\\$pad[_a-z]*\\)){[string]$title = "${title}"; $num; write-output "num if not"; $i=200; $pad; write-output "pad if not"; md $pad"_"$title; copy .\\index.html .\\$pad"_"$title\\; copy .\\index.jsx .\\$pad"_"$title\\; cd .\\$pad"_"$title\\; ls }}`);
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
    checkTitle(`cd .\\React\\; Test-Path .\\[0-9]*_${title}\\`);
}

fileName("Renderizar React no servidor com_renderToString"); 