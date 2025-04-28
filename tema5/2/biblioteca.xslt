<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html lang="es">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Document</title>
            <style>
                table {
                    border: <xsl:value-of select="biblioteca/css/tabla/tipoBorder"></xsl:value-of>;
                    
                }
            </style>
        </head>
        <body>
            <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>año</th>
                <th>categoría</th>
                <th>estado</th>
            </tr>
            <tr>
                <xsl:for-each select="biblioteca/libro">
                    <td><xsl:value-of select="titulo"/></td>
                    <td><xsl:value-of select="autor"/></td>
                    <td><xsl:value-of select="año"/></td>
                    <td><xsl:value-of select="categoria"/></td>
                    td
                </xsl:for-each>
            </tr>
        </body>
        </html>

    </xsl:template>
</xsl:stylesheet>