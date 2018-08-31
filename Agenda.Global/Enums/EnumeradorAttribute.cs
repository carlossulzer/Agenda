using System;

namespace Agenda.Global.Enums
{
    [AttributeUsage(AttributeTargets.Enum)]
    public sealed class EnumeradorAttribute : System.Attribute
    {
        public EnumeradorAttribute() { }

        public string Descricao { get; set; }
        public string Nome { get; set; }
    }
}