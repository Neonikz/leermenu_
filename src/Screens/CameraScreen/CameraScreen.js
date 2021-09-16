import QrReader from 'react-qr-reader';
import {useHistory} from 'react-router-dom';

export const CameraScreen = () => {
  //Implementamos el history
  const history = useHistory();

  // Respuesta del lector de QR
  const handleScan = data => {
    if (data) {
      try {
        sessionStorage.setItem('urlMenu', data);
      } catch (error) {
        console.log(error);
      }
      history.push(`/verMenu?${data}`);
    }
  };

  const handleError = err => {
    console.error(err);
  };

  return (
    <div>
      {/* Componente que lee QR */}
      <QrReader
        delay={600}
        onError={handleError}
        onScan={handleScan}
        className="cameraScaner"
        style={{width: '100vw'}}
        showViewFinder={false}
      />
      <div className="absolute bottom-16 flex justify-center w-full z-10">
        <span className="bg-white rounded-lg p-4 opacity-80">Si utiliza Apple por favor abra la app desde Safari</span>
      </div>
    </div>
  );
};
