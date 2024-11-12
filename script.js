// script.js

// women_facts.js

const womenFacts = [
    {
        fact: 'In 1911, a woman won her second Nobel Prize, becoming the first person to receive Nobel Prizes in two different sciences.',
        year: '1911',
        name: 'Marie Curie',
        source: 'https://www.nobelprize.org/prizes/physics/1903/marie-curie/biographical/'
    },
    {
        fact: 'In 1955, a woman refused to give up her seat on a bus, sparking the Civil Rights Movement in the United States.',
        year: '1955',
        name: 'Rosa Parks',
        source: 'https://www.history.com/topics/black-history/rosa-parks'
    },
    {
        fact: 'In 1966, a woman became the first and, to date, the only female Prime Minister of India.',
        year: '1966',
        name: 'Indira Gandhi',
        source: 'https://www.britannica.com/biography/Indira-Gandhi'
    },
    {
        fact: 'In 1932, a woman became the first to be elected to the United States Senate.',
        year: '1932',
        name: 'Hattie Caraway',
        source: 'https://www.senate.gov/artandhistory/history/minute/First_Woman_Elected_to_Senate.htm'
    },
    {
        fact: 'In 1963, a book titled "The Feminine Mystique" was published, which is often credited with sparking the second wave of feminism in the United States.',
        year: '1963',
        name: 'Betty Friedan',
        source: 'https://www.britannica.com/biography/Betty-Friedan'
    },
    {
        fact: 'In 1979, a woman became the first to be elected Prime Minister of the United Kingdom.',
        year: '1979',
        name: 'Margaret Thatcher',
        source: 'https://www.britannica.com/biography/Margaret-Thatcher'
    },
    {
        fact: 'In 1997, the first female Secretary of State in U.S. history took office.',
        year: '1997',
        name: 'Madeleine Albright',
        source: 'https://www.state.gov/biographies/madeleine-k-albright/'
    },
    {
        fact: "In 1431, a teenage peasant girl led the French army to several important victories during the Hundred Years' War.",
        year: '1431',
        name: 'Joan of Arc',
        source: 'https://www.britannica.com/biography/Saint-Joan-of-Arc'
    },
    {
        fact: 'In 1901, a person became the first to survive a trip over Niagara Falls in a barrel.',
        year: '1901',
        name: 'Annie Edson Taylor',
        source: 'https://www.history.com/news/annie-edson-taylor-first-person-to-go-over-niagara-falls'
    },
    {
        fact: 'In 1909, a woman drove across the United States, covering 3,800 miles from New York to San Francisco.',
        year: '1909',
        name: 'Alice Huyler Ramsey',
        source: 'https://www.smithsonianmag.com/smart-news/meet-alice-ramsey-first-woman-drive-coast-coast-180960174/'
    },
    {
        fact: 'In 1983, the first American woman traveled into space.',
        year: '1983',
        name: 'Sally Ride',
        source: 'https://www.nasa.gov/sites/default/files/atoms/files/ride_bio.pdf'
    },
    {
        fact: 'In 1975, the first woman reached the summit of Mount Everest.',
        year: '1975',
        name: 'Junko Tabei',
        source: 'https://www.britannica.com/biography/Junko-Tabei'
    },
    {
        fact: 'In 2016, the first woman was nominated for U.S. President by a major political party.',
        year: '2016',
        name: 'Hillary Clinton',
        source: 'https://www.britannica.com/biography/Hillary-Clinton'
    },
    {
        fact: 'In 1887, the first woman was elected as mayor in the United States.',
        year: '1887',
        name: 'Susanna M. Salter',
        source: 'https://www.kshs.org/kansapedia/susanna-salter/12186'
    },
    {
        fact: 'In 1947, a princess joined the Auxiliary Territorial Service during World War II, becoming the first female member of the royal family to serve in the armed forces.',
        year: '1947',
        name: 'Queen Elizabeth II',
        source: 'https://www.royal.uk/queen-and-armed-forces'
    },
    {
        fact: 'In 1905, a woman opened her first beauty salon in Melbourne, Australia, laying the foundation for a global cosmetic empire.',
        year: '1905',
        name: 'Helena Rubinstein',
        source: 'https://www.britannica.com/biography/Helena-Rubinstein'
    },
    {
        fact: 'In 1936, a woman became the first to fly solo across the Atlantic Ocean from east to west.',
        year: '1936',
        name: 'Beryl Markham',
        source: 'https://www.britannica.com/biography/Beryl-Markham'
    },
    {
        fact: 'In 69 BCE, a woman became the last active ruler of the Ptolemaic Kingdom of Egypt.',
        year: '69 BCE',
        name: 'Cleopatra',
        source: 'https://www.britannica.com/biography/Cleopatra-queen-of-Egypt'
    },
    {
        fact: 'In the 3rd century BCE, a queen led her people against the Roman Republic in naval battles.',
        year: '3rd century BCE',
        name: 'Queen Teuta',
        source: 'https://www.worldhistory.org/Teuta/'
    },
    {
        fact: 'Around 610 CE, a successful businesswoman became the first wife of a major religious figure in Arabia.',
        year: '610 CE',
        name: 'Khadijah bint Khuwaylid',
        source: 'https://www.britannica.com/biography/Khadijah'
    },
    {
        fact: 'In the 12th century, a powerful woman served as both the Queen of France and England.',
        year: '12th century',
        name: 'Eleanor of Aquitaine',
        source: 'https://www.britannica.com/biography/Eleanor-of-Aquitaine'
    },
    {
        fact: 'In 1869, a woman co-founded an organization advocating for women’s right to vote.',
        year: '1869',
        name: 'Susan B. Anthony',
        source: 'https://www.britannica.com/biography/Susan-B-Anthony'
    },
    {
        fact: 'In 1849, the first woman in the United States received a medical degree.',
        year: '1849',
        name: 'Elizabeth Blackwell',
        source: 'https://www.britannica.com/biography/Elizabeth-Blackwell'
    },
    {
        fact: 'In 1913, a suffragette leader was arrested for leading the suffragette movement in Britain.',
        year: '1913',
        name: 'Emmeline Pankhurst',
        source: 'https://www.britannica.com/biography/Emmeline-Pankhurst'
    },
    {
        fact: 'In 1937, a woman attempted to circumnavigate the globe, and her disappearance remains one of the greatest mysteries in aviation history.',
        year: '1937',
        name: 'Amelia Earhart',
        source: 'https://www.britannica.com/biography/Amelia-Earhart'
    },
    {
        fact: 'In 1872, the first woman ran for President of the United States.',
        year: '1872',
        name: 'Victoria Woodhull',
        source: 'https://www.britannica.com/biography/Victoria-Woodhull'
    }
];
let currentFactIndex = null;
let isFlipped = false;

function showFact() {
    currentFactIndex = Math.floor(Math.random() * womenFacts.length);
    const flashcardText = document.getElementById('flashcard-text');
    flashcardText.textContent = womenFacts[currentFactIndex].fact;
    isFlipped = false;
}

function flipCard() {
    if (currentFactIndex === null) return;
    const flashcardText = document.getElementById('flashcard-text');
    const sourceLink = document.getElementById('source-link');

    if (!isFlipped) {
        flashcardText.textContent = womenFacts[currentFactIndex].name;
        sourceLink.href = womenFacts[currentFactIndex].source;
        sourceLink.style.display = 'block';
        isFlipped = true;
        unlockMilestone(currentFactIndex);
    } else {
        showFact();
        sourceLink.style.display = 'none';
    }
}

function unlockMilestone(index) {
    let unlockedMilestones = JSON.parse(localStorage.getItem('unlockedMilestones')) || [];
    if (!unlockedMilestones.includes(index)) {
        unlockedMilestones.push(index);
        localStorage.setItem('unlockedMilestones', JSON.stringify(unlockedMilestones));
    }
}

function renderTimeline() {
    const timelineElement = document.getElementById('timeline');
    if (timelineElement) {
        timelineElement.innerHTML = '<div class="timeline-line"></div>';
        let unlockedMilestones = JSON.parse(localStorage.getItem('unlockedMilestones')) || [];

        unlockedMilestones = unlockedMilestones.sort((a, b) => parseInt(womenFacts[a].year) - parseInt(womenFacts[b].year));

        unlockedMilestones.forEach((milestoneIndex) => {
            if (milestoneIndex < womenFacts.length) {
                const milestoneCard = document.createElement('div');
                milestoneCard.className = 'timeline-card';
                milestoneCard.innerHTML = `<div class="name-text">${womenFacts[milestoneIndex].name}</div><div class="fact-text">${womenFacts[milestoneIndex].fact}</div><div class="year-text">${womenFacts[milestoneIndex].year}</div>`;
                timelineElement.appendChild(milestoneCard);
            }
        });
    }
}

// Add event listener to the flashcard container
document.getElementById('flashcard-container')?.addEventListener('click', () => {
    flipCard();
    if (!isFlipped) {
        showFact();
    }
});

// Initial fact display
if (document.getElementById('flashcard-text')) {
    showFact();
}

// Render the timeline when the page loads
window.onload = renderTimeline;
