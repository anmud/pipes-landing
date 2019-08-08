import React from 'react'
import Layout from '../components/Layout'
import {Link} from 'gatsby'



const Imprint = ({children}) => {

    return (
        <Layout>
           

           <div className="container mx-auto">
               <div className="flex-col">
              
<div className="container mx-auto w-auto sm:px-2 pt-32 sm:pt-48 pb-20 flex-grow text-left">
<div class="bg-white">
 <div className="flex flex-col flex-grow sm:px-64 mx-12 sm:min-w-full">

     <div className="flex flex-col pb-12">
     <h2 className="text-lg sm:text-xl font-bold text-left mb-3 tracking-wide ">Angaben gemäß § 5 TMG</h2>
     <div className="pb-1 text-md sm:text-lg">Dimitri Tarasowski</div>
     <div className="pb-2">Bruno-Bürgel-Weg 39A</div>
     <div>12439 Berlin</div>
     </div>

     <div className="flex flex-col pb-20">
     <h2 className="text-lg sm:text-xl font-bold mb-3 tracking-wide">Dimitri Tarasowski</h2>
     <div className="pb-2">Tel. +49 157 76831593</div>
     <div>E-Mail: hello [@] pipesdata.com</div>
     </div>

 
     <div className="flex flex-col pb-2">
     <h2 className="text-lg sm:text-xl font-bold mb-3 tracking-wide">Haftung</h2>
     <p className="text-md sm:text-lg  min-w-full tracking-wider leading-normal">
      Wir übernehmen keine Haftung bei Verlinkung auf unsere Seiten sowie für Inhalte externer Links. 
      Für diese Inhalte sind ausschließlich deren Betreiber zuständig. 
      Bei Kenntnisnahme rechtswidriger Verlinkung ergreifen wir sofort entsprechende Maßnahmen.
      Eine Haftung vor Kenntnis einer Rechtsverletzung ist ausgeschlossen.
      </p>
     </div>


     <div className="flex flex-col pb-2">
     <h2 className="text-lg sm:text-xl font-bold mb-3 tracking-wide">Inhalte</h2>
     <p className="text-md sm:text-lg min-w-full tracking-wider leading-normal">
       Trotz aller Sorgfalt bei der Erstellung unserer Internetseiten können wir keine Gewähr für Richtigkeit und Vollständigkeit übernehmen. 
       Die Nutzung der Webseiten erfolgt auf eigenen Gefahr. Es kommt kein Vertragsverhältnis zwischen Seitenanbieter und Nutzer zustande.
       Dies geschieht ausschließlich in Absprache mit Wiederverkäufer bzw. Gewerbetreibende.
      </p>
     </div>

    
     <div className="flex flex-col">
     <h2 className="text-lg sm:text-xl font-bold mb-3 tracking-wide">Datenschutz</h2>
     <div className="min-w-full">
     <p className="text-md sm:text-lg tracking-wider pt-2">Bei Kunden- Lieferanten- Informationen beachten wir die Regeln des Datenschutzes. </p>
    <p className="text-md sm:text-lg tracking-wider leading-normal">
     Persönliche Daten verstehen wir als freiwillig zugesandt und behandeln diese vertraulich ausschließlich für die Auftragsabwicklung.
     Vorgänge und Daten werden elektronisch gespeichert. Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. 
     (“Google”). Google Analytics verwendet sog. “Cookies”, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der 
     Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre Benutzung diese Website (einschließlich Ihrer IP-Adresse) 
     wird an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, 
     um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. 
    </p> 
     <p className="text-md sm:text-lg tracking-wider leading-normal">
     Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten.
     Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. 
     Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern;
     wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. 
     Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.  
     </p>
      </div>
     </div>
     <Link to="/" className="underline text-lg sm:text-xl">Back</Link>

</div>
 </div>
</div>



               </div>
           </div>
            
            
        </Layout>
       
        
    )
}

export default Imprint;
