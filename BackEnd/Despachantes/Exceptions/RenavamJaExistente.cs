using Google.Protobuf.Reflection;
using System;

namespace Despachantes.Exceptions
{
    [Serializable]
    public class RenavamJaExistente : Exception
    {
        public RenavamJaExistente(){}

        public RenavamJaExistente(string message): base(message){}  

    }
}
