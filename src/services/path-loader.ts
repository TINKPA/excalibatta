import { LevelData } from '../levels/levels-map';

type PathData = Array<{ x: number; y: number }>;

export class PathLoader {
  private static paths: Record<string, PathData> = {};

  static async loadPaths(levelData: LevelData): Promise<void> {
    try {
      const response = await fetch(`paths/${levelData.id}.json`);
      this.paths[levelData.id] = await response.json();
    } catch (error) {
      console.error('Error loading path:', error);
    }
  }

  static getPath(levelId: string): PathData {
    return this.paths[levelId] || [];
  }
} 