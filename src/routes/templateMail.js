module.exports = {
  templateClient: function (name, nameFullLocker, addressLocker, country, state, zipCode, Phone) {
    return `<html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>TrackingPTY- Registro de Nuevo Cliente</title>
        <style type="text/css">
          body {
            margin: 0px;
            background-color: #fafafa;
          }
          table {
            table-layout: fixed;
            margin: 0 auto;
          }
          hr {
            margin: auto;
            border: 1px solid #ebebeb;
            max-width: 640px;
          }
          /* unvisited link */
          a:link {
            color: #A8CF45;
          }

          /* visited link */
          a:visited {
            color: #A8CF45;
          }

          /* mouse over link */
          a:hover {
            color: #ffff;
          }

          /* selected link */
          a:active {
            color: #ffff;
          }
        </style>
      </head>
      <body>
        <table
          bgcolor="#fafafa"
          border="0"
          cellpadding="0"
          cellspacing="0"
          width="100%"
        >
          <tr>
            <td>
              <!--[if (gte mso 9)|(IE)]>
              <table width="660" align="center" cellpadding="0" cellspacing="0" border="0" style="width:660px;">
                <tr>
                  <td>
            <![endif]-->
              <table
                align="center"
                bgcolor="#ffffff"
                border="0"
                cellpadding="0"
                cellspacing="0"
                style="max-width:660px;"
                width="100%"
              >
                <br />
                <tr>
                  <td align="center" bgcolor="#ffffff">
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      style="max-width:660px; padding:15px 10px 15px 10px"
                      width="100%"
                    >
                      <tr>
                        <td
                          align="right"
                          bgcolor="#ffffff"
                          style="font-family:Segoe, \'Segoe UI\', \'DejaVu Sans\', \'Trebuchet MS\', Verdana, sans-serif; color: #666666; font-size: 14px;"
                          width="50%"
                        >
                        </td>
                      </tr>
                    </table>
    
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      style="max-width:660px; padding:10px 10px 15px 10px"
                      width="100%"
                    >
                      <tr>
                        <td></td>
                        <td
                          align="center"
                          bgcolor="#ffffff"
                          style="font-family:Segoe, \'Segoe UI\', \'DejaVu Sans\', \'Trebuchet MS\', Verdana, sans-serif; color: #333333; font-size: 12px;"
                          width="50%"
                        >
                          <a
                            href="http://trackingpanama.com/"
                            name="Header Logo"
                            target="_blank"
                            ><img
                              alt="TrackingPTY"
                              border="0"
                              src="https://trackingpanama.com/logos/trackingptycolor.png"
                              style="display:block"
                              width="250"
                          /></a>
                        </td>
                        <td></td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <!-- Promo 1 start -->
                    <table
                      bgcolor="#ffffff"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      style="max-width:660px; padding: 0px 10px 0px 10px;"
                      width="100%"
                    >
                      <tr>
                        <td
                          style="font-family:Segoe, \'Segoe UI\', \'DejaVu Sans\', \'Trebuchet MS\', Verdana, sans-serif; color:#000; font-size:28px; padding:20px 10px 0px 10px; line-height:30px; text-align: center;"
                        >
                          <b
                          > ¡Hola ${name} !<br/></b>
                        </td>
                      </tr>
                      <tr>
                      <td
                        style="font-family:Segoe, \'Segoe UI\', \'DejaVu Sans\', \'Trebuchet MS\', Verdana, sans-serif; color:#666666; font-size:18px; padding:20px 10px 0px 10px; line-height:26px; text-align: center;"
                      >
                        ¡Gracias por registrarte con nosotros!
                      </td>
                    </tr>
                      <tr>
                      <td style="font-family:Segoe, \'Segoe UI\', \'DejaVu Sans\', \'Trebuchet MS\', Verdana, sans-serif; color:#666666; font-size:16px;"> 
                      <br>
                      A continuación se detalla la información de tú nuevo casillero 📦 :<br />
                      &nbsp;
                      <br /> 
                      <b>Nombre/Name:</b>  ${nameFullLocker}
                      <br>
                      <b>Dirección/Address:</b>  ${addressLocker}
                      <br>
                      <b>Dirección 2/ Address 2:</b>  ${addressLocker}
                      <br>                                                
                      <b>País/Country:</b>  ${country} 
                      <br>
                      <b>Estado/State:</b>  ${state} 
                      <br>
                      <b>Postal/ZipCode:</b>  ${zipCode} 
                      <br>
                      <b>Número de teléfono/Phone:</b>  ${Phone} 
                      <br>                                     
                      </tr>
                      <tr>
                      <td
                        style="font-family:Segoe, \'Segoe UI\', \'DejaVu Sans\', \'Trebuchet MS\', Verdana, sans-serif; color:#666666; font-size:18px; padding:20px 10px 0px 10px; line-height:26px; text-align: center;"
                      >
                        ✈️ Vuelos diarios. <br> Recuerda, no cobramos volumen! 🙂 
                        <br />
  

                        &nbsp;<br />
                      </td>
                    </tr>
                    </table>
    

                    <table bgcolor="#F0D10E" border="0" cellpadding="0" cellspacing="0" style="max-width:660px; padding:40px 10px;" width="100%">
                                      
                    <tr>
                        <td align="center">
                        <hr /></td>
                    </tr>
                    <tr>
                        <td align="center" nowrap="nowrap" style="padding:20px 0px 20px 0px;" width="100%">
                        <a href="https://www.instagram.com/trackingpty/" name="instagram" target="_blank" ><img alt="Instagram" border="0" height="32"  src="https://trackingpanama.com/logos/instagram.png" width="32" /></a></td>
                                                            </tr>
                    <tr>
                        <td align="center" style="font-family:Segoe, \'Segoe UI\', \'DejaVu Sans\', \'Trebuchet MS\', Verdana, sans-serif; color: #1E1E19; font-size: 14px; padding:0px 20px 10px 20px;">
                        Tracking PTY<br />
                        <a href="https://api.whatsapp.com/send?phone=50762089311" style="color:#54595F; text-decoration:none;">+507 6208-9311</a>
                        
                        </td>
                    </tr>
                    <td
                    align="center"
                    style="font-family:Segoe, \'Segoe UI\', \'DejaVu Sans\', \'Trebuchet MS\', Verdana, sans-serif; color: #1E1E19; font-size: 14px; padding:10px 20px 40px 20px;"
                  >
                    Usted recibió este email por que solicito la creación de un P.O BOX en <a href="trackingpanama.com" style="color:#54595F; text-decoration:none;">trackingpanama.com</a><br />
                  </td>
                
            </table>
            </td>
          </tr>
        </table>
    
        <!--[if (gte mso 9)|(IE)]>
                  </td>
                </tr>
            </table>
            <![endif]-->
      </body>
    </html>
    `;
  },
  templateBusiness: function (
    name,
    lastName,
    email,
    phone,
    birthDay,
    address,
    howDidYouFind,
    referred,
    locker
  ) {
    let hour = new Date().toLocaleString('es-BO', { timeZone: 'America/Bogota' });
    return `<html>
          <head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
              <title>TrackingPTY- Confirmación de Contacto</title>
              <style type="text/css">body {
              margin: 0px;
              background-color: #fafafa;
          }
          table {
              table-layout: fixed;
              Margin: 0 auto;
          }
          hr {
              margin: auto;
              border: 1px solid #ebebeb;
              max-width: 640px;

          }
              </style>
              
          </head>
          <body>
          <table bgcolor="#fafafa" border="0" cellpadding="0" cellspacing="0" width="100%">
              
                  <tr>
                      <td><!--[if (gte mso 9)|(IE)]>
              <table width="660" align="center" cellpadding="0" cellspacing="0" border="0" style="width:660px;">
                  <tr>
                  <td>
              <![endif]-->
                      <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="max-width:660px;" width="100%">
                          <br>
                              <tr>
                                  <td align="center" bgcolor="#ffffff">
                                  <table border="0" cellpadding="0" cellspacing="0" style="max-width:660px; padding:15px 10px 15px 10px" width="100%">
                                      
                                          <tr>
                                              <td align="right" bgcolor="#ffffff" style="font-family:Segoe, \'Segoe UI\', \'DejaVu Sans\', \'Trebuchet MS\', Verdana, sans-serif; color: #666666; font-size: 14px;" width="50%"></td>
                                          </tr>
                                      
                                  </table>

                                  <table border="0" cellpadding="0" cellspacing="0" style="max-width:660px; padding:10px 10px 15px 10px" width="100%">
                              
                                      
                                  
                                          <tr>
                                              <td></td>
                                              <td align="center" bgcolor="#ffffff" style="font-family:Segoe, \'Segoe UI\', \'DejaVu Sans\', \'Trebuchet MS\', Verdana, sans-serif; color: #333333; font-size: 12px;" width="50%"><a href="http://trackingpanama.com/" name="Header Logo" target="_blank" ><img alt="TrackingPTY" border="0"  src="https://trackingpanama.com/logos/trackingptycolor.png" style="display:block" width="200" /></a></td>
                                              <td></td>
                                          </tr>
                                      
                                  </table>
                                  </td>
                              </tr>
                              <tr>
                                  <td><!-- Promo 1 start -->
                                  <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="max-width:660px; padding: 0px 10px 0px 10px;" width="100%">
                                      
                                          <tr>
                                              <td style="font-family:Segoe, \'Segoe UI\', \'DejaVu Sans\', \'Trebuchet MS\', Verdana, sans-serif; color:#000; font-size:28px; padding:20px 10px 0px 10px; line-height:30px; text-align: center;"><b> Nuevo Cliente Registrado <br>
                                                  <br></b></td>
                                          </tr>
                                          <tr>
                                              <td style="font-family:Segoe, \'Segoe UI\', \'DejaVu Sans\', \'Trebuchet MS\', Verdana, sans-serif; color:#666666; font-size:16px;"> A continuación se detalla la información del Nuevo cliente:<br />
                                              &nbsp;
                                              <br /> 
                                              <b>Nombre:</b>  ${name}
                                              <br>
                                              <b>Apellido:</b>  ${lastName}
                                              <br>                                                
                                              <b>Email:</b>  ${email}
                                              <br>
                                              <b>Teléfono:</b> <a target="_blank" href="https://api.whatsapp.com/send?phone=507${phone}" style="color:#54595F; text-decoration:none; ">+507 ${phone}</a>
                                              <br>
                                              <b>Cumpleaños:</b>  ${birthDay}
                                              <br>
                                              <b>Dirección:</b>  ${address}
                                              <br>
                                              <b>Como nos encontró:</b>  ${howDidYouFind}
                                              <br>
                                              <b>Referido:</b>  ${referred}
                                              <br>
                                              <br>
                                              <b>Casillero:</b>  ${locker}
                                              <br>
                                              <br>                                             
                                              <b>Hora de Registro:</b>  ${hour}
                                              <br>
                                              </tr>

                                          <tr>
                                              <td style="font-family:Segoe, \'Segoe UI\', \'DejaVu Sans\', \'Trebuchet MS\', Verdana, sans-serif; color:#666666; font-size:16px;">
                                                <br>


                                                **********
                                                 <br> *¡Hola ${name}!*
                                                 <br> Gracias por registrarte con nosotros, te enviamos un correo con los datos:
                                                 <br> *Nombre:* ${name} ${lastName} ${locker}
                                                 <br> *Dirección:* ${process.env.POBOX_ADDRESS}
                                                 <br> *País:* ${process.env.POBOX_COUNTRY}
                                                 <br> *Estado:* ${process.env.POBOX_STATE} 
                                                 <br> *Postal:* ${process.env.POBOX_ZIPCODE}
                                                 <br> *Número:* ${process.env.POBOX_PHONE}
                                                 <br> *Vuelos diarios. Recuerda, no cobramos volumen! :)*
                                                 <br> 
                                                **********

                                                <br/> <br>
                                                  <br>
                                                  <br>
                                              &nbsp;<br/></td>
                                          
                                          </tr>

                                          <tr>
                                              <td style="font-family:Segoe, \'Segoe UI\', \'DejaVu Sans\', \'Trebuchet MS\', Verdana, sans-serif; color:#666666; font-size:16px;"><br>Agradecemos contactar al cliente lo más pronto a esta solicitud.<br/> <br>
                                              
                                                  <br>
                                                  <br>
                                              &nbsp;<br/></td>
                                          
                                          </tr>
                                      
                                  </table>

                                  <table bgcolor="#F0D10E" border="0" cellpadding="0" cellspacing="0" style="max-width:660px; padding:40px 10px;" width="100%">
                                      
                                          <tr>
                                              <td align="center">
                                              <hr /></td>
                                          </tr>
                                          <tr>
                                              <td align="center" nowrap="nowrap" style="padding:20px 0px 20px 0px;" width="100%">
                                              <a href="https://www.instagram.com/tracking.pty/" name="instagram" target="_blank" ><img alt="Instagram" border="0" height="32"  src="https://trackingpanama.com/logos/instagram.png" width="32" /></a></td>
                                                                                  </tr>
                                          <tr>
                                              <td align="center" style="font-family:Segoe, \'Segoe UI\', \'DejaVu Sans\', \'Trebuchet MS\', Verdana, sans-serif; color: #1E1E19; font-size: 14px; padding:0px 20px 10px 20px;">
                                              Tracking PTY<br />
                                              <a href="https://api.whatsapp.com/send?phone=50762089311" style="color:#54595F; text-decoration:none;">+507 6208-9311</a>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td align="center" style="font-family:Segoe, \'Segoe UI\', \'DejaVu Sans\', \'Trebuchet MS\', Verdana, sans-serif; color: #1E1E19; font-size: 14px; padding:10px 20px 40px 20px;">Usted recibio este email por que esta autorizado para atender solicitudes. <br />
                                              </td>
                                      
                                  </table>
                                  <!-- Promo Footer end --></td>
                              </tr>
                          
                      </table>
                      </td>
                  </tr>
              
          </table>
          <!--[if (gte mso 9)|(IE)]>
                  </td>
                  </tr>
              </table>
              <![endif]-->
          </body>
      </html>`;
  },
  getMessageWelcome: function (name, gender) {
    const date = new Date();
    var hora = date.getHours();

    switch (gender) {
      case 'male':
        gender = 'Sr.';
        break;
      case 'female':
        gender = 'Sra.';
        break;
      default:
        gender = 'Estimado(a) ';
        break;
    }

    if (hora >= 0 && hora < 12) {
      return (messageWelcome = 'Buenos días ' + gender + ' ' + name + '!!');
    }
    if (hora >= 12 && hora < 18) {
      return (messageWelcome = 'Buenas tardes ' + gender + ' ' + name + '!!');
    }

    if (hora >= 18 && hora < 24) {
      return (messageWelcome = 'Buenas noches ' + gender + ' ' + name + '!!');
    }
  },
};
