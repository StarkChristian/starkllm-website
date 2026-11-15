"""Synthetic demo letters (made-up senders, people, numbers) rendered to PDF/JPG with headless Chromium."""
import pathlib, sys
from playwright.sync_api import sync_playwright
OUT = pathlib.Path(sys.argv[1]); OUT.mkdir(parents=True, exist_ok=True)

CSS = """body{font-family:'DejaVu Sans',Arial,sans-serif;font-size:11.5pt;line-height:1.45;color:#111;margin:0;padding:0}
.head{font-weight:bold;font-size:15pt;margin-bottom:2px}.small{font-size:9pt;color:#444}
.to{margin:26px 0 22px}h1{font-size:14pt;margin:18px 0 10px}table{border-collapse:collapse;margin:10px 0}
td,th{border-bottom:1px solid #999;padding:4px 14px 4px 0;text-align:left}p{margin:8px 0}.r{text-align:right}"""

def page(body): return f"<html><head><meta charset='utf-8'><style>{CSS}</style></head><body>{body}</body></html>"

DOCS = {}

DOCS["Invoice_2026-0412_Harbourview.pdf"] = page("""
<div class=head>Harbourview Office Supplies Ltd</div><div class=small>4 Quay Street, Exampleton EX1 2AB, United Kingdom</div>
<div class=to>Alex Morgan<br>7 Sample Road<br>Exampleton EX2 3CD</div>
<h1>Invoice</h1>
<table><tr><td>Invoice number</td><td>2026-0412</td></tr><tr><td>Customer number</td><td>C-20418</td></tr>
<tr><td>Invoice date</td><td>3 November 2026</td></tr></table>
<table><tr><th>Item</th><th>Qty</th><th class=r>Amount</th></tr>
<tr><td>Laser printer toner, black</td><td>2</td><td class=r>£ 118.00</td></tr>
<tr><td>A4 paper, 5 x 500 sheets</td><td>1</td><td class=r>£ 24.60</td></tr>
<tr><td>Delivery</td><td>1</td><td class=r>£ 42.00</td></tr></table>
<p><b>Total amount due: £ 184.60</b></p>
<p>Please pay by <b>28 November 2026</b> to the account below, quoting the invoice number.</p>
<p>IBAN: GB29 NWBK 6016 1331 9268 19<br>BIC: NWBKGB2L</p>
<p>Payment terms: 25 days net. Thank you for your order.</p>""")

DOCS["Reminder_Harbourview.pdf"] = page("""
<div class=head>Harbourview Office Supplies Ltd</div><div class=small>4 Quay Street, Exampleton EX1 2AB, United Kingdom</div>
<div class=to>Alex Morgan<br>7 Sample Road<br>Exampleton EX2 3CD</div>
<p>12 November 2026</p>
<h1>Payment reminder</h1>
<table><tr><td>Customer number</td><td>C-20418</td></tr><tr><td>Invoice number</td><td>2026-0377</td></tr></table>
<p>Our records show that invoice 2026-0377 for £ 36.90 is still open.</p>
<p>Please transfer the amount of <b>£ 36.90</b> by <b>20 November 2026</b>. If you have paid in the meantime, please ignore this reminder.</p>
<p>IBAN: GB29 NWBK 6016 1331 9268 19</p>""")

DOCS["Steuerbescheid_2025.pdf"] = page("""
<div class=head>Finanzamt Musterstadt</div><div class=small>Beispielallee 1, 12345 Musterstadt</div>
<div class=to>Jonas Beispiel<br>Musterweg 5<br>12345 Musterstadt</div>
<p>Musterstadt, 12.11.2026</p>
<table><tr><td>Steuernummer</td><td>123/456/78901</td></tr><tr><td>Aktenzeichen</td><td>ESt-2025-004711</td></tr></table>
<h1>Einkommensteuerbescheid für 2025</h1>
<p>Die Einkommensteuer für das Jahr 2025 wird auf 6.842,00 EUR festgesetzt. Bereits geleistete Vorauszahlungen: 6.429,50 EUR.</p>
<p>Es ergibt sich ein Nachzahlungsbetrag von <b>412,50 EUR</b>. Bitte zahlen Sie den Betrag bis zum <b>03.12.2026</b> auf das folgende Konto:</p>
<p>IBAN: DE89 3704 0044 0532 0130 00<br>Verwendungszweck: Steuernummer 123/456/78901</p>
<p>Rechtsbehelfsbelehrung: Gegen diesen Bescheid können Sie innerhalb eines Monats nach Bekanntgabe Einspruch einlegen.</p>""")

DOCS["Factura_electricidad_octubre.pdf"] = page("""
<div class=head>Iberluz Energía S.A.</div><div class=small>Calle de la Energía 10, 28000 Madrid, España</div>
<div class=to>Marta Ejemplo<br>Calle Ejemplo 12, 3º B<br>28000 Madrid</div>
<h1>Factura de electricidad</h1>
<table><tr><td>Número de factura</td><td>IB-2026-118234</td></tr><tr><td>Número de cliente</td><td>0048-221-93</td></tr>
<tr><td>Fecha de emisión</td><td>5 de noviembre de 2026</td></tr><tr><td>Periodo facturado</td><td>1 de octubre – 31 de octubre de 2026</td></tr></table>
<p>Consumo del periodo: 214 kWh</p>
<table><tr><td>Término de potencia</td><td class=r>18,40 €</td></tr><tr><td>Término de energía</td><td class=r>41,28 €</td></tr>
<tr><td>Impuestos</td><td class=r>16,67 €</td></tr></table>
<p><b>Importe total: 76,35 €</b></p>
<p>Fecha de vencimiento: <b>22 de noviembre de 2026</b>. Cargo en cuenta: ES91 2100 0418 4502 0005 1332</p>""")

DOCS["Service_Agreement_Brightline.pdf"] = page("""
<div class=head>Brightline Telecom Ltd</div><div class=small>Customer service: 20 Cable Lane, Exampleton EX3 4EF</div>
<h1>Internet and Phone Service Agreement</h1>
<p>between Alex Morgan, 7 Sample Road, Exampleton, and Brightline Telecom Ltd.</p>
<table><tr><td>Contract number</td><td>BL-5567-2025</td></tr><tr><td>Customer number</td><td>BL-77310</td></tr></table>
<p>1. <b>Term.</b> The agreement runs for 24 months from 1 March 2025 and ends on 28 February 2027.</p>
<p>2. <b>Price.</b> The monthly fee is £ 34.90 including VAT. A one-off connection fee of £ 29.00 was paid at signing.</p>
<p>3. <b>Cancellation.</b> The agreement renews for 12 months unless it is cancelled in writing at least three months before the end of the term, so by <b>30 November 2026</b>.</p>
<p>4. <b>Speed.</b> Brightline provides a line of up to 150 Mbit/s. If the speed is permanently below 50% of the agreed value, the customer may cancel without notice.</p>""")

DOCS["Price_change_Brightline.pdf"] = page("""
<div class=head>Brightline Telecom Ltd</div><div class=small>Customer service: 20 Cable Lane, Exampleton EX3 4EF</div>
<div class=to>Alex Morgan<br>7 Sample Road<br>Exampleton EX2 3CD</div>
<p>Exampleton, 9 November 2026</p>
<h1>Price change from 1 January 2027</h1>
<table><tr><td>Customer number</td><td>BL-77310</td></tr><tr><td>Contract number</td><td>BL-5567-2025</td></tr></table>
<p>From 1 January 2027 your monthly fee changes to £ 37.90 (instead of £ 34.90 before). You can cancel the agreement in writing until 15 December 2026 if you do not agree.</p>""")

DOCS["Letter_LakesideHealth_form.pdf"] = page("""
<div class=head>Lakeside Health Insurance</div><div class=small>2 Lake Road, Exampleton EX4 5GH</div>
<div class=to>Alex Morgan<br>7 Sample Road<br>Exampleton EX2 3CD</div>
<p>Exampleton, 10 November 2026</p>
<h1>Annual review of your policy</h1>
<table><tr><td>Policy number</td><td>LH-9921-0457</td></tr></table>
<p>Dear Alex Morgan,</p>
<p>each year we check that your details are up to date. Please complete the enclosed form and return it by <b>10 December 2026</b>. If we do not hear from you, your cover continues unchanged, but your claim for the loyalty discount lapses.</p>
<p>Your yearly premium remains £ 412.00. If you have questions, our team is happy to help.</p>
<p>Kind regards<br>Lakeside Health Insurance</p>""")

DOCS["Final_Notice_Revenue.pdf"] = page("""
<div class=head>National Revenue Service - Final Notice</div>
<div class=to>Alex Morgan<br>7 Sample Road<br>Exampleton</div>
<h1>FINAL NOTICE: unpaid tax of £ 1,950.00</h1>
<p>Our records show that you owe £ 1,950.00 in unpaid tax. You must pay this amount <b>within 24 hours</b> or legal action and arrest will follow.</p>
<p>Pay now with gift cards (Google Play or Steam) or bitcoin. Send the card codes through this payment link: http://nrs-refund-pay.top/pay</p>
<p>Do not tell anyone about this notice. It is confidential.</p>""")

JPG = {"Letter_LakesideHealth_photo.jpg": DOCS["Letter_LakesideHealth_form.pdf"]}  # same letter, as a phone photo

with sync_playwright() as p:
    b = p.chromium.launch()
    for name, html in DOCS.items():
        pg = b.new_page(); pg.set_content(html)
        if name == "Letter_LakesideHealth_form.pdf": pass
        pg.pdf(path=str(OUT / name), format="A4", margin=dict(top="22mm", bottom="22mm", left="22mm", right="22mm"))
        pg.close()
    b.close()
print(sorted(x.name for x in OUT.iterdir()))
