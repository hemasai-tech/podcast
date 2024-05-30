import React, { PropsWithChildren, ReactNode } from "react";
import { PodcastModel } from "../components/models/PodcasrModel";
import { SQliteServices } from "../service/sqliteServices";
import { IDatabaseContract } from "../components/contracts/DatabaseContract";

interface DBContextProps {
  podcasts: PodcastModel[];
  subToPodcast: (podcast: PodcastModel) => Promise<void>
}

export const DBContext = React.createContext<DBContextProps>({
  podcasts: [],
  subToPodcast: () => Promise.resolve()
});

interface DBProviderProps {
  children: ReactNode;
}

export const DBProvider: React.FC<DBProviderProps> = (props: PropsWithChildren) => {
  const [podcasts, setPodcasts] = React.useState<PodcastModel[]>([]);
  const db = React.useRef<IDatabaseContract | null>(null);

  React.useEffect(() => {
    db.current = new SQliteServices();
  }, []);

  React.useEffect(() => {
    if (db.current?.isReady) {
      (async () => {
        if (db.current) {
          const _podcasts = await db.current.getAllPodcast();
          setPodcasts(_podcasts);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [db.current?.isReady]);

  const subToPodcast = async (podcast: PodcastModel) => {
    if (db.current) {
      console.log(db.current, "");

      await db.current.subscribeToPodcast(podcast);

      const _podcasts = await db.current.getAllPodcast();

      setPodcasts(_podcasts);
    }
  };

  const value: DBContextProps = {
    podcasts,
    subToPodcast,
  };
  return (
    <DBContext.Provider value={value}>
      {props.children}
    </DBContext.Provider>
  )
}
