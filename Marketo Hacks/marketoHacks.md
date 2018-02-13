<h1>A front-end developer's guide to hacking Marketo's email platform.</h1>

<h3>Correcting nav colour disappearance when you save an email as a template</h3>

Ah, great. None of the colours you applied are working. Worry no more. If you can find the stand alone `tr` inside your `table` with a `table600` class, you can simplhy add a style to that `tr` of background-color and #000 (colour).

In this particular case, I'm creating a background colour on a png logo. 

My `m_spacer`s also abandoned the colours I had selected. under the `table` class of `m_spacer` I styled the direct descendant `td` with a background-color tag.

The depreciated `<center>` tag that Marketo uses also will accept a background-color styling.

<hr>

<h3>Removing CTAs</h3>

If you'd need to remove a CTA, you have to comment out the entire `table row` under the class of `cta`
eg:
```
<!-- comment out
<tr>
  <td class="cta" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse;">
    <table style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0; border-collapse: collapse; margin-top: 0; margin-right: auto; margin-bottom: 0; margin-left: auto;" align="left" border="0" cellpadding="0" cellspacing="0">
      <tbody>
        <tr>
          <td style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse;" align="center" bgcolor="${twoArticlesButtonBackgroundColor}">
          <a href="${twoArticlesLink}" target="_blank" class="primary-font button" style="-webkit-text-size-adjust:
100%;-ms-text-size-adjust: 100%;border-left-color:${twoArticlesBorderColor};font-size: 14px;font-family:'Raleway', Arial, sans-serif;color: #ffffff;padding-top: 12px;padding-right: 18px;padding-bottom: 12px;padding-left: 18px;border-top-width:${twoArticlesBorderSize};display: inline-block;border-bottom-width:${twoArticlesBorderSize};border-left-width:${twoArticlesBorderSize};border-top-style:
solid;border-right-style: solid;border-bottom-style: solid;border-left-style: solid;border-top-color:${twoArticlesBorderColor};border-right-color:${twoArticlesBorderColor};border-bottom-color:${twoArticlesBorderColor};border-right-width:${twoArticlesBorderSize};text-decoration: none;background-color:${twoArticlesButtonBackgroundColor};">${twoArticlesLinkText}</a>            </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
-->
```
This works only some of the time. If it doesn't work, you can also try `display: none;` under the `td style`
eg:
```
<td class="cta" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse; display:none;">...</td>
```

<h3>To left-align a centered CTA</h3>

There is no option in the modules to left-align a CTA. I hacked it by adjusting `align` to left rather than center in the `td style` and the `table style`.
eg:
```
<tr style="outline: medium none;">
  <td class="cta" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse;">
    <div style="text-align:left">
      <table style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0; border-collapse: collapse; margin-top: 0; margin-right: auto; margin-bottom: 0; margin-left: auto;" align="left"
        border="0" cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <td style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse;" align="left" bgcolor="${ctaButtonBackgroundColor}">
            <a href="${ctaLink}" target="_blank" class="primary-font button" style="-webkit-text-size-adjust:
100%;-ms-text-size-adjust: 100%;border-left-color:${ctaBorderColor};font-size: 14px;font-family:'Raleway', Arial, sans-serif;color: #ffffff;padding-top: 12px;padding-right: 18px;padding-bottom: 12px;padding-left: 18px;border-top-width:${ctaBorderSize};display: inline-block;border-bottom-width:${ctaBorderSize};border-left-width:${ctaBorderSize};border-top-style: solid;border-right-style:
solid;border-bottom-style: solid;border-left-style: solid;border-top-color:${ctaBorderColor};border-right-color:${ctaBorderColor};border-bottom-color:${ctaBorderColor};border-right-width:${ctaBorderSize};text-decoration: none;background-color:${ctaButtonBackgroundColor};">${ctaLinkText}</a>              </td>
          </tr>
        </tbody>
      </table>
    </div>
  </td>
</tr>
```
<hr>
<h3>A two-column footer</h3>


The only way I could get a two-column footer to work responsively was to mark up a table. Percentages work within `table` but won't work with `em` or `rem` for some reason. `em` will work within the `img` tag, though. This is a flippin' mess, but it works. The way Marketo spits out code after you put it into the text editor is a vomit of `&nbsp;` and `<br>`s. 🤯
eg:

```
<table width="85% !important" height="auto">
  <tbody>
    <tr>
      <td><span style="color: #ffffff;"> <br /><br /><br /><img style="width: 13em;" src="#" /> </span><br /></td>
      <td>
      </td>
    </tr>
    <tr>
      <td><span style="color: #ffffff;">A SaaS Product</span><br /><span style="color: #ffffff;"><br />Follow Us&nbsp;&nbsp;</span> <span><a href="https://twitter.com/company" target="_blank">
<img style="width: 2em;" src="#" /></a>&nbsp; &nbsp;&nbsp;</span>
        <span> <img style="width: 1em;" src="#"/>&nbsp; &nbsp;&nbsp;</span><span><img style="width: 2em;" src="#" />&nbsp;&nbsp;&nbsp;</span>
        <span>
<img style="width: 2em;" src="#" /></span><br /><br /><br /></td>
      <td style="vertical-align: top;"><br /></td>
    </tr>
  </tbody>
</table>
<p><span style="color: #ffffff;"><br /></span></p>
```
<hr>
<h3>Images</h3>

Marketo emails don't support .svg. You'll have to use .png or .jpg.
