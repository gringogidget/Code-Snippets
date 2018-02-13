<h1>This is a guide to hacking Marketo's email platform.</h1>
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
