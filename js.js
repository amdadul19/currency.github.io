const taka = document.getElementById('taka');
const dollar = document.getElementById('dollar');
const euro = document.getElementById('euro');
const renminbi = document.getElementById('renminbi');
const yen = document.getElementById('yen');

taka.addEventListener('input',takaToDollarToEuroToRenminbiToyen);
function takaToDollarToEuroToRenminbiToyen() {
	
	const tk = parseInt(taka.value);
	const dl = 0.730754*tk;
	const eu = 0.0104980*tk;
	const rem = 0.0834956*tk;
	const yn = 1.27047*tk;
	dollar.value = dl;
	euro.value = eu;
	renminbi.value = rem;
	yen.value = yn;


 }
 takaToDollarToEuroToRenminbiToyen();

dollar.addEventListener('input',dollarToTakaToEuroToRenminbiToyen);
function dollarToTakaToEuroToRenminbiToyen() {
	
	const dl = parseInt(dollar.value);
	const tk = 84.8172*dl;
	const eu = 0.890293*dl;
	const rem = 7.08110*dl;
	const yn = 107.733*dl;
	taka.value = tk;
	euro.value = eu;
	renminbi.value = rem;
	yen.value = yn;
}
dollarToTakaToEuroToRenminbiToyen();

euro.addEventListener('input',euroToTakaToDollarToRenminbiToyen);
function euroToTakaToDollarToRenminbiToyen() {
	
	const eu = parseInt(euro.value);
	const tk = 95.2560*eu;
	const dl = 1.12309*eu;
	const rem = 7.95300*eu;
	const yn = 120.982*eu;
	taka.value = tk;
	dollar.value = dl;
	renminbi.value = rem;
	yen.value = yn;
}
euroToTakaToDollarToRenminbiToyen();

renminbi.addEventListener('input',renminbiToTakaToDollarToEuroToyen);
function renminbiToTakaToDollarToEuroToyen() {
	
	const rem = parseInt(renminbi.value);
	const tk = 11.9784*rem;
	const dl = 0.141211*rem;
	const eu = 0.125726*rem;
	const yn = 15.2102*rem;
	taka.value = tk;
	dollar.value = dl;
	euro.value = eu;
	yen.value = yn;
}
renminbiToTakaToDollarToEuroToyen();

yen.addEventListener('input',yenToTakaToDollarToEuroToRenminbi);
function yenToTakaToDollarToEuroToRenminbi() {
	
	const yn = parseInt(yen.value);
	const tk = 0.787473*yn;
	const dl = 0.00928441*yn;
	const eu = 0.00826576*yn;
	const rem = 0.0657485*yn;
	taka.value = tk;
	dollar.value = dl;
	euro.value = eu;
	renminbi.value = rem;
}
yenToTakaToDollarToEuroToRenminbi();