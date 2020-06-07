'use script';

{
    function clickBtn(){
        // フォームで先頭の値を取得
        const headNum = document.form1.num.value;
        const pop = document.querySelector('#pop')

        var k = 0
        const nokori = document.createElement('div');
        nokori.className = 'nokori';
        nokori.id="nokori"
        pop.appendChild(nokori)
        // ここまで残り個数を表示するdivを作成
        
        for(let i = 0 ; i < 10 ; i++ ){
            const parent = document.createElement('div');
            parent.className = 'parent';
            parent.id = "parent";
            
            for(let j = 0; j < 6; j++){
                const child = document.createElement("div");
                child.className = "child";
                child.id = "child";
                child.classList.add('box');
                let kazu = headNum*100+i*10;
                switch(j){
                    case 0:
                    kazu += 1;
                    break;
                    case 1:
                    kazu += 3;
                    break;
                    case 2:
                        kazu += 7;
                    break;
                    case 3:
                    kazu += 9;
                    break;
                    case 4:
                    kazu = (kazu+1)*10+1;
                    break;
                    case 5:
                    kazu = (kazu+1)*10+3;
                    break;
                }
                child.textContent = kazu;
                if (primeNumber(kazu)){
                    k++
                }
                
                child.addEventListener('click',()=>{
                    if (primeNumber(kazu)){
                        // child.textContent = 'Prime!';
                        child.classList.add('win');
                        k--
                        nokori.textContent = "残り"+k+"個です"
                        flag = 1
                        if (k===0){
                            nokori.textContent = "Congratulations!!!"
                            nokori.className = 'nokori0';
                            model.classList.remove("hidden");
                            mask.classList.remove("hidden");
                        }
                    }else{
                        // child.textContent = 'No!';
                        child.classList.add('lose');
                    }
                    const chip = document.createElement("span");
                    // chip.classList.add("baloon")
                    // child.classList.add("tooltip1");
                    // chip.textContent = kazu;
                    // child.appendChild(chip);
                },{once:true})
                parent.appendChild(child);
            }
            pop.appendChild(parent);
            nokori.textContent = "残り"+k+"個です"
        }
    }
    
    // pop内の要素をすべて消去する
    function clearBtn(){
        var element = document.getElementById("pop");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    const close = document.getElementById("close");
    const model = document.getElementById("model");
    const mask = document.getElementById("mask");

    close.addEventListener("click" , () => {
        model.classList.add("hidden");
        mask.classList.add("hidden");
    })
    mask.addEventListener("click" , () => {
        close.click();
    })

    
    // 素数判定
    function primeNumber (num) {
        if(num === 2) {
            return true;
        } else {
            for(i = 2; i < num; i++) {
                if(num % i === 0) {
                    return false;
                    break;
                }
                if(i + 1 === num) {
                    return true;
                }
            }
        }
    }
}
            
