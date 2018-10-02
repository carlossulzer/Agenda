using AgendaAPI;
using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using NHibernate;

namespace Agenda.API.Infra
{

    public class NHibernateHelper
    {
        private static ISessionFactory _sessionFactory;

        private static NHibernate.ISessionFactory SessionFactory
        {
            get
            {
                if (_sessionFactory == null)

                    InitializeSessionFactory();
                return _sessionFactory;
            }
        }


        private static void InitializeSessionFactory()
        {

            _sessionFactory = Fluently.Configure().Database(MsSqlConfiguration.MsSql2012.ConnectionString(@"Data Source=.\SQLEXPRESS;Initial Catalog=Agenda;Integrated Security=True")

                .ShowSql()
                )
                .Mappings(m => m.FluentMappings.AddFromAssemblyOf<Program>())
                //.ExposeConfiguration(cfg => new SchemaExport(cfg).Create(true, true))
                .BuildSessionFactory();
        }


        public static NHibernate.ISession OpenSession()
        {
            return SessionFactory.OpenSession();
        }
    }
}