const radios = document.querySelectorAll('input[name="age"]');
const tabs = document.querySelectorAll('.tab');

radios.forEach(radio => {
    radio.addEventListener('change', () => {
    tabs.forEach(tab => tab.classList.remove('active'));

    const selectedValue = radio.value;
    const selectedTab = document.getElementById(`tab-${selectedValue}`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    });
});
