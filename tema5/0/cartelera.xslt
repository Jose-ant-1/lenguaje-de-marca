<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html lang="es">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Document</title>
        </head>
        <body>
            <table>
                <tr>
                    <th>titulo</th>
                    <th>plataforma</th>
                    <th>director</th>
                    <th>año</th>
                </tr>
                <xsl:for-each select="cartelera/pelicula">
                <xsl:sort select="anyo" data-type="number" order="descending"></xsl:sort>
                    <xsl:if test="anyo &gt;= 2010">
                        <tr>
                            <td><xsl:value-of select="titulo"/> (<xsl:value-of select="titulo/@idioma"/>)</td>
                            <td><xsl:value-of select="@plataforma"></xsl:value-of></td>
                            <td><xsl:value-of select="director"/></td>
                            <td><xsl:value-of select="anyo"/></td>
                        </tr>
                    </xsl:if>
                </xsl:for-each>
            </table>
            <br/><br/><br/>
            <p>Películas anteriores a 2010</p>
            <ol>
                <xsl:for-each select="cartelera/pelicula">
                <xsl:sort select="anyo" data-type="number" order="ascending"></xsl:sort>
                    <xsl:if test="anyo &lt; 2010">
                        <li><xsl:value-of select="titulo"></xsl:value-of></li>
                    </xsl:if>
                </xsl:for-each>
            </ol>
        </body>
        </html>

    </xsl:template>
</xsl:stylesheet>