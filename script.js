let roulettes = document.querySelectorAll('.roulette');
const slideWidth = 300;
const id = 2;
for (item of roulettes) {
    wrapper = document.createElement('div');
    gap = document.createElement('div');

    wrapper.classList.add('wrapper');
    gap.classList.add('roulette-gap');

    wrapper.before(item, gap);
    item.append(wrapper);
    gap.before(wrapper, gap);
    wrapper.append(gap);

    btn = document.createElement('button');
    btn.classList.add('btn');
    item.append(btn);
    btn.innerHTML = 'Крутить';

    reset = document.createElement('button');
    reset.classList.add('reset');
    item.append(reset);
    reset.innerHTML = 'Сброс';

    reset.addEventListener('click', rest);

    function rest() {
        gap.style.transform = `translate(0px, 0)`;
        console.log(gap.style.transform);
    }

    buildRoulette = async () => {
        for (let id = 2; id < 19; id++) {
            let link = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
            getName = async () => {
                const response = await fetch(`https://swapi.dev/api/planets/${id}/`);
                let data = await response.json();
                let name = data.name;
                return name;
            }

            container = document.createElement('div');
            img = document.createElement('img');
            sign = document.createElement('span');

            container.classList.add('container');
            img.classList.add('roulette-item');
            sign.classList.add('sign')

            img.setAttribute('src', link);
            sign.innerText = await getName();

            gap.append(container);
            container.append(img);
            img.after(sign);
        }
    }

    buildRoulette();

    btn.addEventListener('click', spin);

    function spin() {
        gap.style.transform = `translate(-${id*slideWidth}px, 0)`;
        console.log(gap.style.transform);
    }
}